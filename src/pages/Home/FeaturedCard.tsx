import { TRoomType } from "../../types";


const FeaturedCard = ({room}: {room: TRoomType}) => {
  console.log(room);
  return (
    <>
      <div className="card w-full bg-[#242424]">
        <figure>
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{room.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
