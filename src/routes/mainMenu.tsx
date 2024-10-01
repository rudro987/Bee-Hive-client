import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";

export const mainMenu = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'Rooms',
        path: '/rooms',
        element: <Rooms />
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
    }
]