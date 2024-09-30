import SectionTitle from "./SectionTitle";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Brands } from "./BrandsLogo";

const TopBrands = () => {
  return (
    <div className="pb-40 max-w-7xl mx-auto">
      <SectionTitle title="Top Brands" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
            Brands.map((brand, index) => (
                <SwiperSlide key={index}>
                    <img src={brand.image} alt={brand.name} className="rounded-2xl" />
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
  );
};

export default TopBrands;
