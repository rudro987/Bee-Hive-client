import AdminDashboard from "../pages/DashBoardPages/Admin/AdminDashboard";
import BookingManagement from "../pages/DashBoardPages/Admin/BookingManagement";
import RoomManagement from "../pages/DashBoardPages/Admin/RoomManagement";
import SlotManagement from "../pages/DashBoardPages/Admin/SlotManagement";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Room Management',
        path: 'room-management',
        element: <RoomManagement />
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