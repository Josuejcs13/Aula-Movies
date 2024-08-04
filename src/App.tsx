import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import FavoriteProvider from "./context/favorite-provider";
import SectionProvider from "./context/sections-provider";

function App() {
  return (
    <SectionProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </SectionProvider>
  );
}

export default App;
