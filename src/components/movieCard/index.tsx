import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../hooks/constants";
import { Movie } from "../../types";
import Checkbox from "../checkbox/checkbox";
import { useEffect, useState } from "react";


type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie: { id, poster_path, title } }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = (value: boolean) => {
    setIsFavorite(value);
    const favorites =
      JSON.parse(localStorage.getItem("favorites") as string) || [];

    const isInclude = favorites.includes(id);

    if (!isInclude) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
      return;
    }

    const newFavorites = favorites.filter((movie: number) => movie !== id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    const favoritesList =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    const favorite = favoritesList.includes(id);
    if (favorite) {
      setIsFavorite(true);
    }
  }, []);

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
        setValue={handleFavorite}
        value={isFavorite}
        id={String(id)}
        className="absolute z-10 bottom-4 right-0"
      />
    </div>
  );
}

export default MovieCard;
