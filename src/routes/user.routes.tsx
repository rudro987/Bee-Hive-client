import MyBookings from "../pages/DashBoardPages/User/MyBookings";
import UserDashboard from "../pages/DashBoardPages/User/UserDashboard";
import UserProfile from "../pages/DashBoardPages/User/UserProfile";

export const userPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <UserDashboard />
    },
    {
        name: 'User Profile',
        path: 'user-profile',
        element: <UserProfile />
    },
    {
        name: 'My Bookings',
        path: 'my-bookings',
        element: <MyBookings />
    },
]