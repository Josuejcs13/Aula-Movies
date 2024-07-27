import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import MovieCard from "../../components/movieCard";

function Favorites() {
  const { getAllFavoritesById, favorites } = useMovies();

  useEffect(() => {
    const listFavoritesId =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    getAllFavoritesById(listFavoritesId);
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
