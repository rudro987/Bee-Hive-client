import SectionTitle from "./SectionTitle";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto">
    <SectionTitle title="Why Choose Us?" />
    <div className="hero pb-40">
      <div className="hero-content flex-col lg:flex-row lg:gap-10">
        <div className="w-1/2">
        <img
          src="https://i.ibb.co.com/r6rNjn8/6-best-MK-programmers.jpg"
          className="rounded-lg"
        />
        </div>
        <div className="w-1/2">
          <p className="leading-8 text-lg text-justify">
          We are passionate about providing top-quality mechanical keyboards tailored to your needs. Our products are crafted with precision, offering durability, customizability, and a premium typing experience. Whether you're a gamer, writer, or tech enthusiast, we have the perfect keyboard for you. We prioritize customer satisfaction by offering exceptional support, fast shipping, and a wide variety of switch options. Our keyboards are designed to enhance productivity and comfort while ensuring style and performance. Choose us for reliable, high-quality mechanical keyboards that elevate your experience to the next level.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
