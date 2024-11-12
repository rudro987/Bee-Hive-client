import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut, useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../utils/verifyToken";
import { TUser } from "../types";

type TProtectedRoute = {
  children: ReactNode,
  role: string | undefined
}

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {

  const token = useAppSelector(useCurrentToken);

  let user;

  if(token){
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if(role !== undefined && role !== (user as TUser)?.role){

    dispatch(logOut());

    return <Navigate to="/login" state={{from: location}} replace={true} />
  }

  if (!token) {
    return <Navigate to="/login" state={{from: location}} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
