import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { mainMenu } from "./mainMenu";
import DashBoard from "../pages/DashBoardPages/DashBoard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routesGenerator(mainMenu)
    },
    {
        path: '/login',
        element: <div>Login</div>
    },
    {
        path: '/register',
        element: <div>Register</div>
    },
    {
        path: '/dashboard',
        element: <DashBoard />
    },
])

export default router;