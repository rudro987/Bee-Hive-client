import { Link } from "react-router-dom";
import SectionTitle from "../../../Home/SectionTitle";
import Loader from "../../../../components/ui/Loader";
import { useDeleteSlotMutation, useGetSlotsQuery } from "../../../../redux/features/slotsManagement/slotsManagementApi";
import { FaTrashAlt } from "react-icons/fa";
import { TSlotManagementType } from "../../../../types";
import { toast } from "sonner";
import Swal from "sweetalert2";

const SlotsManagement = () => {

  const { data, isLoading } = useGetSlotsQuery(undefined);

  const [deleteSlot] = useDeleteSlotMutation();

  const slotsData = data?.data;

  const handleDelete = (id: string) => {
    Swal.fire({
      icon: "error",
      showCloseButton: true,
      showCancelButton: true,
      title: "Are you sure?",
      text: "Deleting a slot is irreversible!",
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
          const res = await deleteSlot(id).unwrap();
          if (res.success) {
            toast.success(res.message, { duration: 2000 });
          }
        } catch (err) {
          console.error(err)
          toast.error("Failed to delete Slot!", { duration: 2000 });
        }
      }
    });
  };

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
              <th>Room Name</th>
              <th>Room No.</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Delete Slot</th>
            </tr>
          </thead>
          <tbody>
            {slotsData?.map((slot: TSlotManagementType, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{slot.room.name}</td>
                <td>{slot.room.roomNo}</td>
                <td>{slot.date}</td>
                <td>{slot.startTime}</td>
                <td>{slot.endTime}</td>
                <td>
                  <button onClick={() => handleDelete(slot._id)}>
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
  )
};

export default SlotsManagement;
