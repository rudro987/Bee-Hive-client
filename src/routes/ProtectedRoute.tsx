import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut, selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode,
  role: string | undefined
}

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {

  const user = useAppSelector(selectCurrentUser)

  const token = useAppSelector(useCurrentToken);

  const dispatch = useAppDispatch();

  if(role !== undefined && role !== user?.role){

    dispatch(logOut());

    return <Navigate to="/login" replace={true} />
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
