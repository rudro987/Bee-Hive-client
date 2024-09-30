import { Outlet } from "react-router-dom";
import NavItems from "../Shared/Header/NavItems";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavItems />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
