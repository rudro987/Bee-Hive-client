import { Link } from "react-router-dom";
import {
  useDeleteRoomMutation,
  useGetRoomsQuery,
} from "../../../redux/features/roomManagement/roomManagementApi";
import SectionTitle from "../../Home/SectionTitle";
import { TRoomType } from "../../../types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "sonner";
import UpdateRoom from "./UpdateRoom";

const RoomManagement = () => {
  const { data } = useGetRoomsQuery(undefined);
  const roomData = data?.data;

  const [deleteRoom] = useDeleteRoomMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      icon: "error",
      showCloseButton: true,
      showCancelButton: true,
      title: "Are you sure?",
      text: "Deleting a room is irreversible!",
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Delete
  `,
      cancelButtonText: `
    <i class="f">Cancel</i>
  `,
      confirmButtonColor: "#D91656",
      cancelButtonColor: "#227B94",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteRoom(id).unwrap();
        if (res.success) {
          toast.success("Room Deleted successfully", { duration: 2000 });
        }
        } catch (err) {
          toast.error('Failed to delete room!', { duration: 2000 });
        }
      }
    });
  };

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
          <thead>
            <tr className="text-base">
              <th>
                <label>#</label>
              </th>
              <th className="text-left">Room Name</th>
              <th>Room No.</th>
              <th>Floor No.</th>
              <th>Capacity</th>
              <th>Price Per Slot</th>
              <th className="text-left">Action</th>
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
                        <img src={room.image} />
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
                <td>
                <button
                    onClick={() =>
                      (
                        document.getElementById(
                          `update-modal${room._id}`
                        ) as HTMLDialogElement
                      )?.showModal()
                    }
                  >
                    <FaEdit
                      size="24"
                      className="text-secondaryColor hover:text-primaryFont"
                    />
                  </button>
                  <dialog id={`update-modal${room._id}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <input
                          type="submit"
                          value="X"
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        />
                      </form>
                      <h3 className="font-bold text-lg">Update Product</h3>
                      <UpdateRoom room={room} />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
                <td>
                  <button onClick={() => handleDelete(room._id as string)}>
                    <FaTrashAlt
                      size="24"
                      className="text-primaryFont hover:text-secondaryColor"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomManagement;
