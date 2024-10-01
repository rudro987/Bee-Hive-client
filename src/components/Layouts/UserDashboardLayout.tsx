import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <div>
      <h1>Usar Header</h1>
      <Outlet />
      <h1>User Footer</h1>
    </div>
  )
};

export default UserDashboardLayout;
