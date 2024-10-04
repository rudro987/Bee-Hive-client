import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const DashboardHeader = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div>
      <ul className="w-full flex justify-center items-center gap-20 py-7 bg-base-200">
        <li className="text-base hover:text-primaryFont">
          <Link to="/" className="hover:bg-transparent focus:bg-transparent focus:text-primaryFont">Home</Link>
        </li>
        <li className="text-base hover:text-primaryFont">
          <button onClick={handleLogout} className="hover:bg-transparent focus:bg-transparent focus:text-primaryFont">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
