/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "sonner";
import Loader from "../../../../components/ui/Loader";
import { useGetallUsersQuery, useUpdateUserRoleMutation } from "../../../../redux/features/users/allUsersApi";
import { IUserTypes } from "../../../../types";
import SectionTitle from "../../../Home/SectionTitle";

const AllUsers = () => {
  const { data, isLoading } = useGetallUsersQuery(undefined);

  const userData = data?.data;

  const [updateUserRole, { isLoading: updateUserLoading }] = useUpdateUserRoleMutation();

  const handleMakeAdmin = async (id: string) => {
    const updateRoleData = {
        role: "admin",
      };
  
      try {
        const res = await updateUserRole({ updateRoleData, id }).unwrap();
        if (res.success) {
          toast.success(res.message, { duration: 2000 });
        }
      } catch (err: any) {
        console.log("error message: ", err);
        toast.error(err.message, { duration: 2000 });
      }
  };

  const handleMakeUser = async (id: string) => {
    const updateRoleData = {
        role: "user",
      };
  
      try {
        const res = await updateUserRole({ updateRoleData, id }).unwrap();
        if (res.success) {
          toast.success(res.message, { duration: 2000 });
        }
      } catch (err: any) {
        console.log("error message: ", err);
        toast.error(err.message, { duration: 2000 });
      }
  };

  if (isLoading || updateUserLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="pt-20">
      <SectionTitle title="All Users" />
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr className="text-base uppercase">
              <th>
                <label>#</label>
              </th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Update role</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user: IUserTypes, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.role === "admin" ? "ADMIN" : user.role === "user" ? "USER" : "No Role Assigned"}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleMakeUser(user._id)}
                      className="bg-transparent btn border border-primaryFont rounded text-white hover:border-secondaryColor"
                    >
                      Change to User
                    </button>
                  ) : user.role === "user" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-transparent btn border border-primaryFont rounded text-white hover:border-secondaryColor"
                    >
                      Change to Admin
                    </button>
                  ) : (
                    "No Role Assigned"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
