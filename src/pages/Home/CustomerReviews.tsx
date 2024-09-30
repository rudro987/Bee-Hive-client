import { reviews } from "./Reviews";
import SectionTitle from "./SectionTitle";
import AwesomeTestimonial from "react-awesome-testimonials";

const CustomerReviews = () => {
  return (
    <div className="pb-40 max-w-7xl mx-auto">
      <SectionTitle title="Customer Reviews" />
      <AwesomeTestimonial testimonials={reviews} />
    </div>
  );
};

export default CustomerReviews;
