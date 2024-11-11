import { Link } from "react-router-dom";
import { menuItemsGenerator } from "../../../utils/menuItemsGenerator";
import { mainMenu } from "../../../routes/mainMenu";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logOut,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { TUser } from "../../../types";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

const NavItems = () => {
  const menuItems = menuItemsGenerator(mainMenu);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  const handleLogout = () => {
    dispatch(logOut());
  };

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
                <span className="text-secondaryColor font-bold">Bee</span>-
                <span className="text-primaryFont font-bold">Hive</span>
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
            <div className="navbar-end">
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://i.ibb.co.com/W6PdY6H/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black bg-primaryFont font-bold space-y-3 rounded z-[1] mt-1 -mr-20 w-44 shadow py-5"
                  >
                    {user.role === "admin" ? (
                      <li>
                        <Link to="/admin/dashboard">
                          <BiSolidDashboard size={20} />
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/user/dashboard">
                          <BiSolidDashboard size={20} />
                          My Bookings
                        </Link>
                      </li>
                    )}
                    <li>
                      <button onClick={handleLogout}>
                        <IoMdLogOut size={20} />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex gap-5">
                  <Link to="/login">
                    <h1 className="text-base hover:text-primaryFont">Login</h1>
                  </Link>
                  <Link to="/register">
                    <h1 className="text-base hover:text-primaryFont">
                      Register
                    </h1>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
