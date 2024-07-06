import useMovies from "../../hooks/useMovies";
import MovieCard from "../../components/movieCard";

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
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
