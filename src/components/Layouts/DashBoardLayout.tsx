import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  )
};

export default DashboardLayout;
