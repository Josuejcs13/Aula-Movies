import { createContext } from "react";
import { SectionContextType } from "../types";

const SectionContext = createContext<SectionContextType>(
  {} as SectionContextType
);

export default SectionContext;
