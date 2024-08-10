import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import { useEffect, useState } from "react";
import { IMAGE_BASE_MOVIE } from "../../constants";
import Checkbox from "../../components/checkbox/checkbox";

const Movie = () => {
  const { movie, getMovieById } = useMovies();
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = (value: boolean) => {
    setIsFavorite(value);
    const favorites =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    const isInclude = favorites.includes(movie?.id);
    if (isInclude) {
      const newFavorites = favorites.filter((id: number) => movie?.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return;
    }
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, movie?.id])
    );
  };

  useEffect(() => {
    if (id) {
      getMovieById(id);
    }
  }, []);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    const isInclude = favorites.includes(movie?.id);
    if (isInclude) {
      setIsFavorite(true);
    }
  }, [movie]);

  if (!movie) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div>
      <h1>{movie?.title}</h1>
      <img src={`${IMAGE_BASE_MOVIE}${movie.backdrop_path}`} alt="" />
      <Checkbox
        setValue={handleFavorite}
        value={isFavorite}
        id={String(movie.id)}
      />
    </div>
  );
};

export default Movie;
