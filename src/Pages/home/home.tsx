import CarouselMovies from "../../components/carouselMovies";
import HeaderNetflix from "../../components/headerNetflix";
import { useContext } from "react";
import FavoriteContext from "../../context/favorite-context";
import SectionContext from "../../context/sections-context";

const Home = () => {
  const { favorites } = useContext(FavoriteContext);
  const { topSearch, popularSeries } = useContext(SectionContext);

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
          <CarouselMovies movies={topSearch} className="w-screen" />
        </div>
        <div className="flex w-full flex-col">
          {Boolean(favorites.length) && (
            <>
              <h1>My List</h1>
              <CarouselMovies
                movies={favorites}
                className="w-screen"
              ></CarouselMovies>
            </>
          )}
        </div>
        <div className="flex w-full flex-col">
          <h1>Popular Series</h1>
          <CarouselMovies movies={popularSeries} className="w-screen" />
        </div>
      </div>
    </div>
  );
};

export default Home;
