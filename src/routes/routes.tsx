import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { mainMenu } from "./mainMenu";

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
        element: <div>Dashboard</div>
    },
])

export default router;