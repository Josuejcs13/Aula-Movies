import { useParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import { useEffect } from "react";
import { IMAGE_BASE_MOVIE } from "../../hooks/constants";

const Movie = () => {
  const { movie, getMovieById } = useMovies();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMovieById(id);
    }
  }, []);
  if (!movie) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div>
      <h1>{movie?.title}</h1>
      <img src={`${IMAGE_BASE_MOVIE}${movie.backdrop_path}`} alt="" />
    </div>
  );
};

export default Movie;
