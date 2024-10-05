/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import Input from "../../../components/ui/Input";
import SectionTitle from "../../Home/SectionTitle";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FilesInput from "../../../components/ui/FilesInput";
import useAxiosPublic from "../../../utils/useAxiosPublic";
import { useState } from "react";
import { useCreateRoomMutation } from "../../../redux/features/roomManagement/roomManagementApi";

const amenitiesOptions = ["Projector", "WhiteBoard", "WiFi", "AC", "Parking"];

const AddRoom = () => {
  const [ createRoom ] = useCreateRoomMutation();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const axiosPublic = useAxiosPublic();

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
    const toastId = toast.loading("Adding a new Product");
    const galleryData = Array.from(data.gallery);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const roomImage = res.data.data.display_url;

    const galleryURLs = await Promise.all(
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

    try {
      const roomData = {
        name: data.name,
        roomNo: Number(data.roomNo),
        image: roomImage,
        gallery: galleryURLs,
        floorNo: Number(data.floorNo),
        capacity: Number(data.capacity),
        pricePerSlot: Number(data.pricePerSlot),
        amenities: selectedAmenities,
      };
  
      console.log("this is room data: ", roomData);
  
      const result = await createRoom(roomData).unwrap();
      console.log("this is result: ", result);
      if(result.success){
        toast.success("Room added successfully", {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (err: any) {
      console.log("error message: ", err)
      toast.error(err.data.message, {
        id: toastId,
        duration: 5000,
      });
    }

  };

  return (
    <div className="pt-20">
      <SectionTitle title="Create a Room" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse pb-20">
          <div className="card w-[600px] shrink-0 shadow-2xl shadow-primaryFont">
            <form className="card-body pb-20 bg-base-200" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Name"
                placeholder="Room Name"
                name="name"
                register={register}
                required={true}
              />
              {errors.name && <span className="text-red-600">Name is Required</span>}

              <FilesInput
                type="file"
                label="Image"
                placeholder="Room Image"
                name="image"
                required={true}
                register={register}
              />
              {errors.image && <span className="text-red-600">Image is Required</span>}

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
                    required={true}
                  />
                  {errors.roomNo && <span className="text-red-600">Room No is Required</span>}
                </div>
                <div className="w-1/2">
                  <Input
                    type="number"
                    label="Floor No"
                    placeholder="Floor No"
                    name="floorNo"
                    register={register}
                    required={true}
                  />
                  {errors.floorNo && <span className="text-red-600">Please specify Floor no</span>}
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
                    required={true}
                  />
                  {errors.capacity && <span className="text-red-600">Please specify capacity of the room</span>}
                </div>
                <div className="w-1/2">
                  <Input
                    type="number"
                    label="Price Per Slot"
                    placeholder="Price Per Slot"
                    name="pricePerSlot"
                    register={register}
                    required={true}
                  />
                  {errors.pricePerSlot && <span className="text-red-600">Price per slot is required</span>}
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
                {...register("amenities", {
                  validate: () => selectedAmenities.length > 0 || "At least one amenity must be selected",
                })}
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
              {errors.amenities && (
                <span className="text-red-600">{errors.amenities.message as string}</span>
              )}

              <div className="form-control mt-6">
                <button type="submit" className=" btn bg-primaryFont rounded text-black hover:bg-secondaryColor font-bold">Add Room</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
