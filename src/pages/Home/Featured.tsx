import Loader from "../../components/ui/Loader";
import { useGetRoomsQuery } from "../../redux/features/roomManagement/roomManagementApi";
import { TRoomType } from "../../types";
import FeaturedCard from "./FeaturedCard";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  const query = { limit: 6 };
  const { data, isLoading } = useGetRoomsQuery(query);
  const roomsData = data?.data;

  console.log(data);

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="pb-40 max-w-7xl mx-auto">
      <SectionTitle title="Featured Products" />
      <div className="grid grid-cols-3 gap-5">
        {
          roomsData?.map((room: TRoomType) => (
            <FeaturedCard key={room._id} room={room} />
          ))
        }
      </div>
    </div>
  );
};

export default Featured;
