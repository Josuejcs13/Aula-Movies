import { useEffect, useState } from "react";
import { Favorite, FavoriteContextType, Movie, ShowType } from "../types";
import FavoriteContext from "./favorite-context";
import axios from "axios";
import { BASE_URL } from "../hooks/constants";

type FavoriteProviderProps = {
  children: React.ReactNode;
};

const apiKey = import.meta.env.VITE_API_KEY;

const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const handleFavorite = (movie: Movie) => {
    const { id, type } = movie;
    const favorites =
      JSON.parse(localStorage.getItem("favorites") as string) || [];

    const isInclude = favorites.some(
      (favorite: Favorite) => favorite.id === id
    );

    if (!isInclude) {
      setFavorites((prev) => [...prev, movie]);
      const favorite = {
        type: type ? type : ShowType.Movies,
        id,
      };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, favorite])
      );
      return;
    }

    const newFavorites = favorites.filter(
      (favorite: Favorite) => favorite.id !== id
    );

    setFavorites((prev) => prev.filter((movie: Movie) => movie.id !== id));
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    const getLocalStorageFavorites = async () => {
      const localStorageFavorites = localStorage.favorites
        ? JSON.parse(localStorage.favorites)
        : [];
      const promissesMovies = localStorageFavorites.map(
        async (favorite: Favorite) => {
          const response = await axios.get(
            `${BASE_URL}/${
              favorite.type === ShowType.Movies ? "movie" : "tv"
            }/${favorite.id}?api_key=${apiKey}`
          );
          return {
            id: response.data.id,
            backdrop_path: response.data.backdrop_path,
            type: favorite.type,
            original_title: response.data.original_title,
            poster_path: response.data.poster_path,
            title:
              favorite.type === ShowType.Movies
                ? response.data.title
                : response.data.name,
          } as Movie;
        }
      );
      const favoriteMovies = await Promise.all(promissesMovies);
      setFavorites(favoriteMovies);
    };
    getLocalStorageFavorites();
  }, []);

  const initialState: FavoriteContextType = {
    favorites,
    handleFavorite,
  };

  return (
    <FavoriteContext.Provider value={initialState}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
