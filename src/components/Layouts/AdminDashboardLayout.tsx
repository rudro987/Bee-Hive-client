import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div>
      <h1>Admin Header</h1>
      <Outlet />
      <h1>Admin Footer</h1>
    </div>
  )
};

export default AdminDashboardLayout;
