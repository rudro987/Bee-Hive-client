import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";

export const mainMenu = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'Meeting Rooms',
        path: '/meeting-rooms',
        element: <MeetingRooms />
    },
    {
        name: 'Single Room',
        path: '/rooms/:roomId',
        element: <h1>Single room</h1>
    },
    {
        name: 'About Us',
        path: '/about-us',
        element: <AboutUs />
    },
    {
        name: 'Contact Us',
        path: '/contact-us',
        element: <ContactUs />
    },
    {
        name: 'Login',
        path: '/login',
        element: <Login />
    },
    {
        name: 'Register',
        path: '/register',
        element: <Register />
    },
]