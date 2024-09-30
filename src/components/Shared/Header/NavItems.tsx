import { Link } from "react-router-dom";
import { menuItemsGenerator } from "../../../utils/menuItemsGenerator";
import { allPaths } from "../../../routes/allPaths";
import { FaCartArrowDown } from "react-icons/fa";

const NavItems = () => {
  const menuItems = menuItemsGenerator(allPaths);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 w-full">
        <div className="flex gap-5 py-2 max-w-7xl mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primaryFont"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {menuItems?.map((item, index) => (
                    <li
                      key={index}
                      className="text-base hover:text-primaryFont"
                    >
                      <Link
                        className="hover:bg-transparent"
                        to={`${item.path}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/" className="text-2xl font-mono">
                <span className="text-secondaryColor font-bold">Ctrl</span>+Alt+
                <span className="text-primaryFont font-bold">Del</span>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {menuItems?.map((item, index) => (
                  <li key={index} className="text-base hover:text-primaryFont">
                    <Link
                      className="hover:bg-transparent focus:bg-transparent focus:text-primaryFont"
                      to={`${item.path}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end relative">
              <div className="w-5 h-5 bg-primaryFont text-[#242424] flex justify-center items-center rounded-full text-xs absolute -top-2 -right-2">
                0
              </div>
              <Link to="/">
                <FaCartArrowDown className="text-2xl text-secondaryColor" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
