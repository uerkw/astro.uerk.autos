import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MySlider() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      //lazy={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/doj5apewk/image/upload/t_keith-bronze-rage-track/v1703442512/uerk.autos/IMG_20231224_132736_asyphq.jpg"
          loading="lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/doj5apewk/image/upload/t_bronze-rage-idle/v1703442511/uerk.autos/IMG_20231224_132734_lrjkjg.jpg"
          loading="lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/doj5apewk/image/upload/t_bronze-rage-idle/v1703442511/uerk.autos/IMG_20231224_132733_tuggq3.jpg"
          loading="lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </SwiperSlide>
    </Swiper>
  );
}
