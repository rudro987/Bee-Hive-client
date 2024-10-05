/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateRoomMutation } from "../../../redux/features/roomManagement/roomManagementApi";
import { toast } from "sonner";
import { useState } from "react";
import useAxiosPublic from "../../../utils/useAxiosPublic";
import Input from "../../../components/ui/Input";
import FilesInput from "../../../components/ui/FilesInput";
import { TRoomType } from "../../../types";
import Loader from "../../../components/ui/Loader";

const amenitiesOptions = ["Projector", "WhiteBoard", "WiFi", "AC", "Parking"];

const UpdateRoom = ({ room }: { room: TRoomType }) => {
  const { register, handleSubmit, formState: { isLoading },  setValue } = useForm();

  const axiosPublic = useAxiosPublic();

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(room.amenities as string[]);

  const [updateRoom] = useUpdateRoomMutation();

  const handleAmenitiesChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    if (selectedValue && !selectedAmenities.includes(selectedValue)) {
      const newAmenities = [...selectedAmenities, selectedValue];
      setSelectedAmenities(newAmenities);
      setValue("amenities", newAmenities);
    }
  };

  const removeAmenity = (amenity: string) => {
    const filteredAmenities = selectedAmenities.filter(
      (item) => item !== amenity
    );
    setSelectedAmenities(filteredAmenities);
    setValue("amenities", filteredAmenities);
  };

  const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
  const image_api = `${
    import.meta.env.VITE_IMAGE_HOSTING_API
  }?key=${image_api_key}`;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const galleryData = Array.from(data.gallery);

    let roomImage = room.image;
    let galleryURLs = room.gallery || [];

    const imageFile = { image: data.image[0] };

    if(data.image && data.image.length > 0){
        const result = await axiosPublic.post(image_api, imageFile, {
            headers: {
              "content-type": "multipart/form-data",
            },
          });
      
          roomImage = result.data.data.display_url;
    }

    if(galleryData.length > 0){
        galleryURLs = await Promise.all(
            galleryData.map(async (file) => {
              const formData = new FormData();
              formData.append("image", file as string);
              const response = await axiosPublic.post(image_api, formData, {
                headers: {
                  "content-type": "multipart/form-data",
                },
              });
              return response.data.data.display_url;
            })
          );
    }

    try {
      const id = room._id;
      const productUpdatedData = {
        name: data.name,
        roomNo: Number(data.roomNo),
        image: roomImage,
        gallery: galleryURLs,
        floorNo: Number(data.floorNo),
        capacity: Number(data.capacity),
        pricePerSlot: Number(data.pricePerSlot),
        amenities: selectedAmenities,
      };

      const res = await updateRoom({ productUpdatedData, id }).unwrap();

      if (res.success) {
        toast.success("Room successfully updated!", { duration: 2000 });
      }
    } catch (err: any) {
      console.log("error message: ", err);
      toast.error(err.data.message, { duration: 5000 });
    }
  };

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0">
          <form className="card-body p-0" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Name"
              placeholder="Room name"
              value={room.name}
              name="name"
              register={register}
            />

            <FilesInput
              type="file"
              label="Image"
              placeholder="Room Image"
              name="image"
              register={register}
            />

            <FilesInput
              type="file"
              label="Gallery"
              placeholder="Gallery images"
              name="gallery"
              register={register}
              multiple={true}
            />

            <div className="flex gap-5">
              <div className="w-1/2">
                <Input
                  type="number"
                  label="Room No"
                  placeholder="Room No"
                  name="roomNo"
                  register={register}
                  value={room.roomNo}
                />
              </div>
              <div className="w-1/2">
                <Input
                  type="number"
                  label="Floor No"
                  placeholder="Floor No"
                  name="floorNo"
                  register={register}
                  value={room.floorNo}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Input
                  type="number"
                  label="Capacity"
                  placeholder="Capacity"
                  name="capacity"
                  register={register}
                  value={room.capacity}
                />
              </div>
              <div className="w-1/2">
                <Input
                  type="number"
                  label="Price Per Slot"
                  placeholder="Price Per Slot"
                  name="pricePerSlot"
                  register={register}
                  value={room.pricePerSlot}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
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
            </div>

            <select
              className="select select-bordered border-primaryFont w-full max-w-xs"
              onChange={handleAmenitiesChange}
            >
              <option value="" disabled>
                Select amenities
              </option>
              {amenitiesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="form-control mt-6">
              <button
                type="submit"
                className=" btn bg-primaryFont rounded text-black hover:bg-secondaryColor font-bold"
              >
                Update Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
