import AdminDashboard from "../pages/DashBoardPages/Admin/AdminDashboard";
import BookingManagement from "../pages/DashBoardPages/Admin/BookingManagement";
import CreateRoom from "../pages/DashBoardPages/Admin/CreateRoom";
import SlotManagement from "../pages/DashBoardPages/Admin/SlotManagement";
import ViewRooms from "../pages/DashBoardPages/Admin/ViewRooms";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Room Management',
        children: [
            {
                name: 'Create Room',
                path: 'create-room',
                element: <CreateRoom />
            },
            {
                name: 'View Rooms',
                path: 'view-rooms',
                element: <ViewRooms />
            }
        ]
    },
    {
        name: 'Slot Management',
        path: 'slot-management',
        element: <SlotManagement />
    },
    {
        name: 'Booking Management',
        path: 'booking-management',
        element: <BookingManagement />
    }
]