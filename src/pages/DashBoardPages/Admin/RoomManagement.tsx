import { useGetRoomsQuery } from "../../../redux/features/roomManagement/roomManagementApi";

const RoomManagement = () => {
  const { data } = useGetRoomsQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is RoomManagement Component</h1>
    </div>
  )
};

export default RoomManagement;
