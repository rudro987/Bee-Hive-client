import { Link } from "react-router-dom";
import { useGetRoomsQuery } from "../../../redux/features/roomManagement/roomManagementApi";
import SectionTitle from "../../Home/SectionTitle";
import { TRoomType } from "../../../types";

const RoomManagement = () => {
  const { data } = useGetRoomsQuery(undefined);
  const roomData = data?.data;
  console.log(roomData)
  return (
    <div className="pt-20">
      <SectionTitle title="Rooms List" />
      <div className="overflow-x-auto">
        <div className="flex justify-end pb-10">
          <Link to="/admin/create-room">
          <button className="bg-transparent btn border border-primaryFont rounded text-white hover:border-secondaryColor">
      Create Room
    </button>
          </Link>
        </div>
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th className="text-left">Room Name</th>
              <th>Room No.</th>
              <th>Floor No.</th>
              <th>Capacity</th>
              <th>Price Per Slot</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roomData?.map((room: TRoomType, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        {/* <img src={product.image} /> */}
                        image
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{room.name}</div>
                    </div>
                  </div>
                </td>
                <td>{room.roomNo}</td>
                <td>{room.floorNo}</td>
                <td>{room.capacity}</td>
                <td>${room.pricePerSlot.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default RoomManagement;
