import useMovies from "../../hooks/useMovies";
import CarouselMovies from "../../components/carouselMovies";
import HeaderNetflix from "../../components/headerNetflix";
import { useEffect, useState } from "react";
import { Favorite, ShowType } from "../../types";

const Home = () => {
  const { movies, getAllFavoritesById, favorites, popularSeries } = useMovies();
  const [reRender, setReRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const listFavoritesId =
      JSON.parse(localStorage.getItem("favorites") as string) || [];
    getAllFavoritesById(listFavoritesId);
    setIsLoading(false);
  }, [reRender]);

  const handleFavorite = (id: number, type: ShowType) => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites") as string) || [];

    const isInclude = favorites.some(
      (favorite: Favorite) => favorite.id === id
    );

    if (!isInclude) {
      const favorite = {
        type: type ? type : ShowType.Movies,
        id,
      };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, favorite])
      );
      setReRender((prev) => !prev);
      return;
    }

    const newFavorites = favorites.filter(
      (favorite: Favorite) => favorite.id !== id
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setReRender((prev) => !prev);
  };

  return (
    <div className="h-full bg-[#141414] flex text-white justify-center flex-col">
      <HeaderNetflix />
      <img
        src="https://occ-0-748-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWdIvNKs08e4fn9HHGPBn13KTTbsFRKsZDOqS9H15jb4pdHltfDIEi7MnTF_N9nasEXpEokeccEnZfYAYMAmg3krX-3r9DG6HWVt.webp?r=650"
        alt="background home page"
        className="w-full h-screen object-cover"
      />
      <div className="flex w-full overflow-hidden pl-14 flex-col">
        <div className="flex w-full flex-col">
          <h1>Top Search</h1>
          <CarouselMovies
            movies={movies}
            className="w-screen"
            handleFavorite={handleFavorite}
          />
        </div>
        <div className="flex w-full flex-col">
          {!isLoading && Boolean(favorites.length) && (
            <>
              <h1>My List</h1>
              <CarouselMovies
                movies={favorites}
                className="w-screen"
                handleFavorite={handleFavorite}
              ></CarouselMovies>
            </>
          )}
        </div>
        <div className="flex w-full flex-col">
          <h1>Popular Series</h1>
          <CarouselMovies
            movies={popularSeries}
            className="w-screen"
            handleFavorite={handleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
