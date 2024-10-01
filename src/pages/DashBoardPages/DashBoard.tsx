import AdminDashboardLayout from "../../components/Layouts/AdminDashboardLayout";
import UserDashboardLayout from "../../components/Layouts/UserDashboardLayout";
import DashboardSidebar from "./DashboardSidebar";

const DashBoard = () => {
  const user = {
    role: 'admin'
  }
  return (
    // based on user role admin or user layout
    
    <div className="flex">
      <div className="w-2/12">
      <DashboardSidebar />
      </div>
      <div className="flex-grow">
      {user.role === 'admin' ? <AdminDashboardLayout /> : <UserDashboardLayout />}
      </div>
    </div>
  )
};

export default DashBoard;
