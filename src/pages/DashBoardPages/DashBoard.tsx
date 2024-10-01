import DashboardLayout from "../../components/Layouts/DashBoardLayout";
import DashboardSidebar from "./DashboardSidebar";

const DashBoard = () => {
  return (
    // based on user role admin or user layout
    
    <div className="flex">
      <div className="w-2/12">
      <DashboardSidebar />
      </div>
      <div className="flex-grow">
      <DashboardLayout /> 
      </div>
    </div>
  )
};

export default DashBoard;
