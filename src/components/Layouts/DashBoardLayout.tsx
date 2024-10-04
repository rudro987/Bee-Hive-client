import { Outlet } from "react-router-dom";
import DashboardHeader from "../../pages/DashBoardPages/DashboardHeader";
import DashboardFooter from "../../pages/DashBoardPages/DashboardFooter";

const DashboardLayout = () => {
  return (
    <div className="h-[300vh]">
      <DashboardHeader />
      <Outlet />
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
