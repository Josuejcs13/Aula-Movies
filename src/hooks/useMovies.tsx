import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";
import axios from "axios";
import { Favorite, Movie, Series, ShowType } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie>();
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [popularSeries, setPopularSeries] = useState<Movie[]>([]);

  const getMovieById = async (id: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${apiKey}`
      );
      setMovie(response.data as Movie);
    } catch (error) {}
  };

  const getAllFavoritesById = async (favoriteList: Favorite[]) => {
    const promisesFavorites = favoriteList.map(async (favorite) => {
      const response = await axios.get(
        `${BASE_URL}/${favorite.type === ShowType.Movies ? "movie" : "tv"}/${
          favorite.id
        }?api_key=${apiKey}`
      );
      return response.data as Movie;
    });
    Promise.all(promisesFavorites).then((resolvedFavorites) =>
      setFavorites(resolvedFavorites)
    );
  };

  const fetchPopularSeries = async () => {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${apiKey}`
    );
    const normalizedSeries = response.data.results.map((serie: Series) => {
      return {
        id: serie.id,
        title: serie.name,
        backdrop_path: serie.backdrop_path,
        poster_path: serie.poster_path,
        type: ShowType.Series,
      };
    });
    setPopularSeries(normalizedSeries);
  };

  useEffect(() => {
    fetchPopularSeries();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${apiKey}&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return {
    movies,
    setPage,
    isLoading,
    movie,
    getMovieById,
    getAllFavoritesById,
    favorites,
    popularSeries,
  };
};

export default useMovies;
