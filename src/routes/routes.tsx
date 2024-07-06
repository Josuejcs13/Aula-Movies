import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/login";
import Home from "../Pages/home/home";
import Movie from "../Pages/movie/movie";
import Favorites from "../Pages/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

export default router;
