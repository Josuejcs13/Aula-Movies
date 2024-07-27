export type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
  backdrop_path: string;
  title: string;
  type: ShowType;
};

export type Series = {
  id: number;
  name: string;
  backdrop_path: string;
  original_title: string;
  poster_path: string;
};

export type Favorite = {
  type: ShowType;
  id: number;
};

export type TypeError = {
  email: string;
  password: string;
};

export type TypeIsTouched = {
  email: boolean;
  password: boolean;
};

export type FavoriteContextType = {
  favorites: Movie[];
  handleFavorite: (movie: Movie) => void;
};

export type SectionContextType = {
  topSearch: Movie[];
  popularSeries: Movie[];
};

export enum InputType {
  Email = "Email",
  Password = "Password",
}

export enum ShowType {
  Series = "Series",
  Movies = "Movies",
}
