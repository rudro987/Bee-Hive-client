import Loader from "../../../../components/ui/Loader";
import { useGetallUsersQuery } from "../../../../redux/features/users/allUsersApi";

const AllUsers = () => {
  const { data, isLoading } = useGetallUsersQuery(undefined);

  const userData = data?.data;
  console.log(userData);

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div>
      <h1>This is AllUsers Component</h1>
    </div>
  );
};

export default AllUsers;
