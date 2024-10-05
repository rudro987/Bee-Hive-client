import { Outlet } from "react-router-dom";
import DashboardHeader from "../../pages/DashBoardPages/DashboardHeader";
import DashboardFooter from "../../pages/DashBoardPages/DashboardFooter";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-grow px-20">
      <Outlet />
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
