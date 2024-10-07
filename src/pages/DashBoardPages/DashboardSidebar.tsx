import { Link } from "react-router-dom";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { menuItemsGenerator } from "../../utils/menuItemsGenerator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const DashboardSidebar = () => {
  
  const dispatch = useAppDispatch();

  let sidebarItems;

  const token = useAppSelector(useCurrentToken);

  let user;

  if(token){
    user = verifyToken(token);
  }

  if ((user as TUser)?.role === "admin") {
    sidebarItems = menuItemsGenerator(adminPaths);
  } else if((user as TUser)?.role === "user") {
    sidebarItems = menuItemsGenerator(userPaths);
  }else{
    dispatch(logOut());
  }

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div className="w-2/12 min-h-screen fixed bg-secondaryBg flex flex-col justify-between pt-5 pb-20 px-5">
      <div>
        <Link to="/" className="text-2xl font-mono">
          <span className="text-secondaryColor font-bold">Bee</span>-
          <span className="text-primaryFont font-bold">Hive</span>
        </Link>
        <ul className="menu p-0 pt-10">
          {sidebarItems?.map((item, index) => (
            <li key={index} className="text-base hover:text-primaryFont">
            <Link to={`${item.path}`} className="hover:bg-transparent focus:bg-transparent focus:text-primaryFont">
              <p className="text-lg leading-10">{item.name}</p>
            </Link>
          </li>
          ))}
        </ul>
      </div>

      <div>
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
            className="menu menu-sm dropdown-content bg-primaryFont hover:bg-secondaryColor text-black font-bold rounded z-[1] mt-1 -mr-20 w-32 p-2 shadow"
          >
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
