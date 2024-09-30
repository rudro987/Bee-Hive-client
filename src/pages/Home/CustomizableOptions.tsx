import SectionTitle from "./SectionTitle";

const CustomizableOptions = () => {
  return (
    <div className="max-w-7xl mx-auto">
    <SectionTitle title="Customizable Options" />
    <div className="hero pb-40">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="w-1/2">
        <img
          src="https://i.ibb.co.com/HGqTYZS/keyboard-accessories-hero-mobile.webp"
          className="rounded-lg"
        />
        </div>
        <div className="w-1/2">
          <p className="leading-8 text-lg text-justify">
          As a hobby that can be expensive and overwhelming to understand when you’re just getting started, we’ve always felt that gamers should have a more accessible entry point to keyboard customization. Designed to fit seamlessly with any form factor or setup, our accessories are designed to open up a world of keyboard customization options for novices and beginners.
          </p>
          <h1 className="py-6 text-2xl text-secondaryColor font-bold">Your Keyboard. Your rules!</h1>
          <p className="pb-6">Try your hand at keyboard customization with our interactive setup to get a sense of how it'll look like before you make your choice.</p>
          <button className="btn bg-transparent border rounded-none border-secondaryColor text-primaryFont hover:border-primaryFont hover:text-secondaryColor">START CUSTOMIZING</button>
        </div>
      </div>
    </div>
    </div>
  )
};

export default CustomizableOptions;
