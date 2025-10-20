import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SlideAvatar = ({ option1, title1, option2, title2, option3, title3 }) => {
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
              <b>{title1}</b>
              <img src={option1} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded flex flex-col items-center w-full">
              <b>{title2}</b>
              <img src={option2} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded flex flex-col items-center w-full">
              <b>{title3}</b>
              <img src={option3} className="max-w-full h-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SlideAvatar;
