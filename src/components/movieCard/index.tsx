import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../hooks/constants";
import { Movie } from "../../types";
import Checkbox from "../checkbox/checkbox";
import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../context/favorite-context";

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { handleFavorite } = useContext(FavoriteContext);
  const { poster_path, title, id } = movie;
  const { favorites } = useContext(FavoriteContext);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.id === movie.id));
  }, [favorites, movie.id]);

  const handleClickCheckBox = (value: boolean) => {
    setIsFavorite(value);
    handleFavorite(movie);
  };

  return (
    <div className="relative">
      <Link
        to={`/movie/${id}`}
        key={id}
        className="bg-white shadow-md rounded-lg overflow-hidden"
      >
        <img
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </Link>
      <Checkbox
        setValue={handleClickCheckBox}
        value={isFavorite}
        id={String(id)}
        className="absolute z-10 bottom-4 right-0"
      />
    </div>
  );
}

export default MovieCard;
