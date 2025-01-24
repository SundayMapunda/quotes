import { Route, createRoutesFromElements } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout.jsx";
// import App from "./App.jsx";
// import Quiz from "./pages/Quiz.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Birthday from "./pages/Birthday.jsx";
import Wallpaper from "./pages/Wallpaper.jsx";

const routes = createRoutesFromElements(
  <>
    {/* <Route path="/quotes/" element={<MainLayout />}  errorElement={<ErrorPage />}>
      <Route index element={<App />} />
    </Route> */}
    {/* <Route path="/quotes" element={<Quiz />} /> */}
    {/* <Route path="*" element={<ErrorPage />} /> */}
    <Route path="/quotes" element={<Birthday />} />
    <Route path="/quotes/board" element={<Wallpaper />} />
  </>
);

export default routes;
