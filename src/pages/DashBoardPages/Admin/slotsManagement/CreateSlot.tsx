import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import SectionTitle from "../../../Home/SectionTitle";
import { useGetRoomsQuery } from "../../../../redux/features/roomManagement/roomManagementApi";
import { getRoomsInfo } from "../../../../utils/getRoomsInfo";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const CreateSlot = () => {
  const { data: rooms } = useGetRoomsQuery(undefined);

  const roomsData = getRoomsInfo(rooms?.data);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
    setValue,
    control,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const fromatedDate = format(data.startDate, 'yyyy-MM-dd');

    const slotData = {
      room: data.room,
      startDate: fromatedDate,
    };
    console.log(slotData);
  };

  return (
    <div className="pt-20">
      <SectionTitle title="Create a Slot" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse pb-20">
          <div className="card w-[600px] shrink-0 shadow-2xl shadow-primaryFont">
            <form
              className="card-body pb-20 bg-base-200"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <div className="flex flex-wrap">
                <label className="label mr-3">
                  <span className="text-lg">Amenities</span>
                </label>
                {selectedAmenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-secondaryColor text-black px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
                  >
                    {amenity}
                    <button
                      type="button"
                      className="ml-2 text-sm"
                      onClick={() => removeAmenity(amenity)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div> */}

              <select
                className="select select-bordered border-primaryFont w-full max-w-xs"
                {...register("room")}
                defaultValue="Select a room"
              >
                <option disabled>Select a room</option>
                {roomsData?.map((room, index) => (
                  <option key={index} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
              {errors.amenities && (
                <span className="text-red-600">
                  {errors.amenities.message as string}
                </span>
              )}

              <Controller
                control={control}
                name="startDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <ReactDatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  />
                )}
              />

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className=" btn bg-primaryFont rounded text-black hover:bg-secondaryColor font-bold"
                >
                  Add Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlot;
