import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { mainMenu } from "./mainMenu";
import DashBoard from "../pages/DashBoardPages/DashBoard";
import { userPaths } from "./user.routes";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routesGenerator(mainMenu)
    },
    {
        path: '/admin',
        element: <DashBoard />,
        children: routesGenerator(adminPaths)
    },
    {
        path: '/user',
        element: <DashBoard />,
        children: routesGenerator(userPaths)
    },
    
])

export default router;