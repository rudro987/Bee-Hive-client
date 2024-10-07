/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import {
  useDeleteBookingMutation,
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
} from "../../../../redux/features/bookingsManagement/bookingsManagementApi";
import SectionTitle from "../../../Home/SectionTitle";
import { toast } from "sonner";
import Loader from "../../../../components/ui/Loader";
import { TBookingsType } from "../../../../types";
import { GiCancel, GiConfirmed } from "react-icons/gi";

const BookingManagement = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);

  const [deleteSlot, { isLoading: deleteLoading}] = useDeleteBookingMutation();

  const [updateBooking, { isLoading: updateLoading }] = useUpdateBookingMutation();

  const allBookingsData = data?.data;

  const handleApprove = async (id: string) => {
    const bookingsUpdatedData = {
      isConfirmed: "confirmed",
    };

    try {
      const res = await updateBooking({ bookingsUpdatedData, id }).unwrap();
      if (res.success) {
        toast.success("Booking confirmed!", { duration: 2000 });
      }
    } catch (err: any) {
      console.log("error message: ", err);
      toast.error("Something went wrong!", { duration: 2000 });
    }
  };

  const handleReject = (id: string) => {
    Swal.fire({
      icon: "error",
      showCloseButton: true,
      showCancelButton: true,
      title: "Are you sure?",
      text: "Rejecting a Booking will remove it from the list!",
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Reject
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
            toast.success('Booking is rejected!', { duration: 2000 });
          }
        } catch (err) {
          console.error(err);
          toast.error("Failed to reject Bookings!", { duration: 2000 });
        }
      }
    });
  };

  if (isLoading || deleteLoading || updateLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="pt-20">
      <SectionTitle title="All Bookings List" />
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr className="text-base">
              <th>
                <label>#</label>
              </th>
              <th>Room Name</th>
              <th>User Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Approve/Reject</th>
            </tr>
          </thead>
          <tbody>
            {allBookingsData?.map((booking: TBookingsType, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{booking.room.name}</td>
                <td>{booking.user.name}</td>
                <td>{booking.date}</td>
                <td>
                  {booking.slots.map((slots) => (
                    <p key={slots._id}>
                      {slots.startTime} - {slots.endTime}
                    </p>
                  ))}
                </td>
                <td>
                  <span className="uppercase">{booking.isConfirmed}</span>
                </td>
                <td className="flex gap-5 justify-center items-center">
                <button onClick={() => handleApprove(booking._id)}>
                    <GiConfirmed
                      size="24"
                      className="text-secondaryColor hover:text-primaryFont"
                    />
                  </button>
                  <button onClick={() => handleReject(booking._id)}>
                    <GiCancel
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

export default BookingManagement;
