import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { BASE_URL } from "../hooks/constants";
import { Movie, SectionContextType, Series, ShowType } from "../types";
import SectionContext from "./sections-context";

type SectionProviderProps = {
  children: React.ReactNode;
};

const SectionProvider = ({ children }: SectionProviderProps) => {
  const [topSearch, setTopSearch] = useState<Movie[]>([]);
  const [popularSeries, setPopularSeries] = useState<Movie[]>([]);

  const getTopSearch = async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`
    );
    setTopSearch(response.data.results);
  };

  const getPopularSeries = async () => {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    const normalizePopularSeries = response.data.results.map(
      (serie: Series) => {
        return {
          ...serie,
          type: ShowType.Series,
          title: serie.name,
        } as Movie;
      }
    );
    setPopularSeries(normalizePopularSeries);
  };

  useEffect(() => {
    getTopSearch();
    getPopularSeries();
  }, []);

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
