import MyBookings from "../pages/DashBoardPages/User/MyBookings";
import UserDashboard from "../pages/DashBoardPages/User/UserDashboard";

export const userPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <UserDashboard />
    },
    {
        name: 'My Bookings',
        path: 'my-bookings',
        element: <MyBookings />
    },
]