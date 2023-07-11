import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "../styles/styles.css";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {Array(5)
          .fill(0)
          .map(() => (
            <SwiperSlide>
              <img
                src="slide-1.png"
                alt="Banner"
                class="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
