import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Home from "../pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/home", element: <Home /> },
]);

export default router;
