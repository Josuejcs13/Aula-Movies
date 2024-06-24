import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/login";
import Home from "../Pages/home/home";
import Movie from "../Pages/movie/movie";

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
]);

export default router;
