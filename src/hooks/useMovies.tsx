import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";
import axios from "axios";
import { Movie } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie>();

  const getMovieById = async (id: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${apiKey}`
      );
      setMovie(response.data as Movie);
    } catch (error) {}
  };

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
  };
};

export default useMovies;
