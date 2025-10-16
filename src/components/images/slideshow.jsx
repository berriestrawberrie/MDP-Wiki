import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slideshow = ({ female, male, baby }) => {
  return (
    <div className="max-w-[320px] sm:max-w-[700px] overflow-hidden">
      <div className="max-w-lg mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="p-6 rounded flex flex-col items-center w-full">
              <b>Female</b>
              <img src={female} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded flex flex-col items-center w-full">
              <b>Male</b>
              <img src={male} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded flex flex-col items-center w-full">
              <b>Baby</b>
              <img src={baby} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slideshow;
