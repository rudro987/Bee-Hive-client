import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title='Our Services' />
      <div className="grid grid-cols-4 justify-items-stretch gap-10">
        <div className="bg-[#242424] border border-[#3A3A3A] hover:border-secondaryColor rounded-md flex flex-col items-center justify-center gap-3 ">
          <FaShippingFast className="text-4xl text-secondaryColor" />
          <h1 className="text-2xl">Free Shipping</h1>
          <p>Order over $300</p>
        </div>
        <div className="bg-[#242424] border border-[#3A3A3A] hover:border-secondaryColor rounded-md flex flex-col justify-center items-center py-10 gap-3">
          <MdOutlinePayment className="text-4xl text-secondaryColor" />
          <h1 className="text-2xl">Quick payment</h1>
          <p>100% Secure</p>
        </div>
        <div className="bg-[#242424] border border-[#3A3A3A] hover:border-secondaryColor rounded-md flex flex-col justify-center items-center py-10 gap-3">
          <GiDeliveryDrone className="text-4xl text-secondaryColor" />
          <h1 className="text-2xl">Lowest Delivery Charge</h1>
          <p>Secured and fast delivery</p>
        </div>
        <div className="bg-[#242424] border border-[#3A3A3A] hover:border-secondaryColor rounded-md flex flex-col justify-center items-center py-10 gap-3">
          <BiSupport className="text-4xl text-secondaryColor" />
          <h1 className="text-2xl">24/7 Support</h1>
          <p>Ready For You</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
