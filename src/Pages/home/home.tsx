import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../hooks/constants";
import useMovies from "../../hooks/useMovies";

const Home = () => {
  const { movies, setPage, isLoading } = useMovies();
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => (prev === 1 ? 1 : prev - 1));
  };
  if (isLoading) {
    <h1>Carregando...</h1>;
  }
  return (
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <button onClick={handleNext}>Próximo</button>
        <button onClick={handlePrev}>Anterior</button>
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
