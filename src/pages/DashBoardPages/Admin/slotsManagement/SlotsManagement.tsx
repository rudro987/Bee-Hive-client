import { Link } from "react-router-dom";
import SectionTitle from "../../../Home/SectionTitle";
import Loader from "../../../../components/ui/Loader";
import { useGetSlotsQuery } from "../../../../redux/features/slotsManagement/slotsManagementApi";
import { useGetRoomsQuery } from "../../../../redux/features/roomManagement/roomManagementApi";
import { FaEdit } from "react-icons/fa";
import { getRoomsInfo } from "../../../../utils/getRoomsInfo";
import { TSlotType } from "../../../../types";

const SlotsManagement = () => {

  const { data, isLoading } = useGetSlotsQuery(undefined);
  const { data: rooms } = useGetRoomsQuery(undefined);

  const roomsData = getRoomsInfo(rooms?.data);

  console.log(roomsData)

  const slotsData = data?.data;

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="pt-20">
      <SectionTitle title="Slots List" />
      <div className="overflow-x-auto">
        <div className="flex justify-end pb-10">
          <Link to="/admin/create-slot">
            <button className="bg-transparent btn border border-primaryFont rounded text-white hover:border-secondaryColor">
              Create Slot
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
            {slotsData?.map((slot: TSlotType, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src='' />
                        image
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">name</div>
                    </div>
                  </div>
                </td>
                <td>adda</td>
                <td>adad</td>
                <td>adad</td>
                <td>$adad</td>
                <td>
                  <button
                    onClick={() =>
                      (
                        document.getElementById(
                          `update-modal${slot._id}`
                        ) as HTMLDialogElement
                      )?.showModal()
                    }
                  >
                    <FaEdit
                      size="24"
                      className="text-secondaryColor hover:text-primaryFont"
                    />
                  </button>
                  <dialog id={`update-modal${slot._id}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <input
                          type="submit"
                          value="X"
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        />
                      </form>
                      <h3 className="font-bold text-lg">Update Product</h3>
                      {/* <UpdateRoom room={room} /> */}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
                <td>
                  {/* <button onClick={() => handleDelete(room._id as string)}>
                    <FaTrashAlt
                      size="24"
                      className="text-primaryFont hover:text-secondaryColor"
                    />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default SlotsManagement;
