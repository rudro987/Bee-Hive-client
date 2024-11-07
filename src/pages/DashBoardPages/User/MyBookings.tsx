import Loader from "../../../components/ui/Loader";
import { useGetUserBookingsQuery } from "../../../redux/features/userBookings/userBookingsApi";
import { TUserBookingType } from "../../../types";
import SectionTitle from "../../Home/SectionTitle";

const MyBookings = () => {
  
  const { data, isLoading } = useGetUserBookingsQuery(undefined);
  const bookingsData = data?.data;

  if (isLoading) {
    return <Loader size="160px" />;
  }


  return (
    <div className="pt-20">
      <SectionTitle title="My Bookings" />
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr className="text-base">
              <th>
                <label>#</label>
              </th>
              <th>Room Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingsData?.map((booking: TUserBookingType, index: number) => (
              <tr key={index}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{booking.room.name}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
