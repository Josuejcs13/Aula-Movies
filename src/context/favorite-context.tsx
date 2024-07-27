import { createContext } from "react";
import { FavoriteContextType } from "../types";

const FavoriteContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export default FavoriteContext;
