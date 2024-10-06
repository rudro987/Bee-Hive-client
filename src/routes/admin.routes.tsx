import AdminDashboard from "../pages/DashBoardPages/Admin/AdminDashboard";
import BookingManagement from "../pages/DashBoardPages/Admin/BookingManagement";
import CreateRoom from "../pages/DashBoardPages/Admin/roomManagement/CreateRoom";

import RoomManagement from "../pages/DashBoardPages/Admin/roomManagement/RoomManagement";
import CreateSlot from "../pages/DashBoardPages/Admin/slotsManagement/CreateSlot";
import SlotManagement from "../pages/DashBoardPages/Admin/slotsManagement/SlotsManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Room Management",
    path: "room-management",
    element: <RoomManagement />,
  },
  {
    name: "Slot Management",
    path: "slot-management",
    element: <SlotManagement />,
  },
  {
    name: "Booking Management",
    path: "booking-management",
    element: <BookingManagement />,
  },
  {
    name: "Create Room",
    path: "create-room",
    element: <CreateRoom />,
  },
  {
    name: "Create Slot",
    path: "create-slot",
    element: <CreateSlot />,
  },
];
