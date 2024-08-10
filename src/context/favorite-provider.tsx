import { Favorite, FavoriteContextType, Movie, ShowType } from "../types";
import FavoriteContext from "./favorite-context";
import useMovies from "../hooks/useMovies";

type FavoriteProviderProps = {
  children: React.ReactNode;
};



const FavoriteProvider = ({ children }: FavoriteProviderProps) => {  
  

  const {favorites , setFavorites } = useMovies()

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
