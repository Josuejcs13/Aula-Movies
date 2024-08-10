import { useEffect, useState } from "react";
import { Movie, SectionContextType, Series, ShowType } from "../types";
import SectionContext from "./sections-context";
import useMovies from "../hooks/useMovies";

type SectionProviderProps = {
  children: React.ReactNode;
};

const SectionProvider = ({ children }: SectionProviderProps) => {
  const { movies, popularSeries } = useMovies();

  const [topSearch, setTopSearch] = useState<Movie[]>([]);

  useEffect(() => {
    setTopSearch(movies);
  }, [movies]);

  const initialState: SectionContextType = {
    topSearch,
    popularSeries,
  };

  return (
    <SectionContext.Provider value={initialState}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
