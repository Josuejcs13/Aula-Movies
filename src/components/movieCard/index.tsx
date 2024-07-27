import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../hooks/constants";
import { Favorite, Movie, ShowType } from "../../types";
import Checkbox from "../checkbox/checkbox";
import { useEffect, useState } from "react";

type MovieCardProps = {
  movie: Movie;
  handleFavorite: (id: number, type: ShowType) => void;
};

function MovieCard({
  movie: { id, poster_path, title, type },
  handleFavorite,
}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favoritesList =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    const favorite = favoritesList.some(
      (favorite: Favorite) => favorite.id === id
    );
    if (favorite) {
      setIsFavorite(true);
    }
  }, []);
  const handleClickCheckBox = (value: boolean, id: number) => {
    setIsFavorite(value);
    handleFavorite(id, type);
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
