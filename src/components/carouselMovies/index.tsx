import MovieCard from "../../components/movieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import { Movie } from "../../types";

type CarouselMoviesProps = {
  movies?: Movie[];
  className?: string;
};

const CarouselMovies = ({ movies, className }: CarouselMoviesProps) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className={className}
      >
        <CarouselContent>
          {movies?.map((movie) => (
            <CarouselItem key={movie.id} className="basis-52">
              <div className="p-1">
                <MovieCard movie={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default CarouselMovies;
