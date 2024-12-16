import { Route, createRoutesFromElements } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout.jsx";
// import App from "./App.jsx";
import Quiz from "./pages/Quiz.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = createRoutesFromElements(
  <>
    {/* <Route path="/quotes/" element={<MainLayout />}>
      <Route index element={<App />} />
    </Route> */}
    <Route path="/quotes" element={<Quiz />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);

export default routes;
