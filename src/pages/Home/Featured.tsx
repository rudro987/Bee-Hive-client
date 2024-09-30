import FeaturedCard from "./FeaturedCard";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <div className="pb-40 max-w-7xl mx-auto">
    <SectionTitle title='Featured Products' />
      <div className="grid grid-cols-3 gap-5">
        <FeaturedCard />
      </div>
    </div>
  );
};

export default Featured;
