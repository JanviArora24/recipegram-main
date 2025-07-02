import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
      <TopNavbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
