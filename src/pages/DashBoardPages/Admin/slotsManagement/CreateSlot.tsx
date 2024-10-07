/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { format } from "date-fns";
import { generateTimeSlots } from "../../../../utils/generateTimeSlots";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "../../../../components/ui/Loader";
import { useCreateSlotMutation } from "../../../../redux/features/slotsManagement/slotsManagementApi";

const CreateSlot = () => {

  const [startTime, setStartTime] = useState<string | null>(null); 

  const [ createSlot, { isLoading } ] = useCreateSlotMutation();

  const { data: rooms } = useGetRoomsQuery(undefined);

  const roomsData = getRoomsInfo(rooms?.data);

  const timeSlots = generateTimeSlots(60);

  const filteredEndTimeSlots = timeSlots.filter((time) => {
    if (startTime) {
      return time > startTime;
    }
    return true; 
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating a new Slot");
    const fromatedDate = format(data.startDate, "yyyy-MM-dd");

    try {
      const slotData = {
        room: data.room,
        date: fromatedDate,
        startTime: data.startTime,
        endTime: data.endTime,
      };
  
      const res = await createSlot(slotData).unwrap();
  
      if(res.success){
        toast.success("Slot created successfully", {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (err: any) {
      console.log(err);
      toast.error('Something went wrong, please try again!', {
        id: toastId,
        duration: 2000,
      });
    }

  };

  if (isLoading) {
    return <Loader size="160px" />;
  }

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
              <div className="flex gap-5 pb-5 items-center">
                <label className="label">
                  <span className="text-lg">Select Room: </span>
                </label>
                <select
                  className="select select-bordered border-primaryFont w-full max-w-xs"
                  {...register("room", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="">Select a room</option>
                  {roomsData?.map((room, index) => (
                    <option key={index} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
                
              </div>
              {errors.room && (
                  <span className="text-red-600 px-2">Please select a room</span>
                )}

              <div className="flex gap-5 pb-5 items-center">
                <label className="label">
                  <span className="text-lg">Select Date: </span>
                </label>
                <Controller
                  control={control}
                  name="startDate"
                  defaultValue={format(new Date(), "yyyy-MM-dd")}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <ReactDatePicker
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      minDate={new Date()}
                      className="bg-transparent w-full max-w-xs h-10 leading-6 px-4 border border-primaryFont rounded-lg focus-visible:outline-none"
                    />
                  )}
                />
                {errors.startDate && (
                  <span className="text-red-600">Please select a room</span>
                )}
              </div>

              <div className="flex gap-5 pb-5 items-center">
                <label className="label">
                  <span className="text-lg">Start Time: </span>
                </label>
                <select
                  className="select select-bordered border-primaryFont w-full max-w-xs"
                  {...register("startTime", { required: true })}
                  onChange={(e) => setStartTime(e.target.value)}
                  defaultValue=""
                >
                  <option disabled value="">Select start time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                
              </div>
              {errors.startTime && (
                  <span className="text-red-600">Please select a start time</span>
                )}

              <div className="flex gap-5 pb-5 items-center">
                <label className="label">
                  <span className="text-lg">End Time: </span>
                </label>
                <select
                  className="select select-bordered border-primaryFont w-full max-w-xs"
                  {...register("endTime", { required: true })}
                  defaultValue=""
                >
                  <option disabled value="">Select end time</option>
                  {filteredEndTimeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                
              </div>
              {errors.endTime && (
                  <span className="text-red-600">Please select an end time</span>
                )}

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
