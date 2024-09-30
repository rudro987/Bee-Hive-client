import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { allPaths } from "./allPaths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(allPaths),
  },
]);

export default router;
