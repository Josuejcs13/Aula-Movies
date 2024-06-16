import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/login";
import Home from "../Pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
