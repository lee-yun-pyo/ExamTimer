import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { HOURS, MINUTES, NOON } from "@/constants";

import "swiper/css";

export function TimeSlider() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [noons, setNoons] = useState(0);

  return (
    <div
      className={`w-full h-80 rounded-b-lg text-text dark:text-text-dark
       transition-transform duration-300 transform origin-top flex items-center`}
    >
      <div className="h-[70px] border-y-2 border-y-red-300 w-full absolute"></div>
      <div className="w-full flex justify-around text-3xl font-semibold h-full">
        <Swiper
          className="px-4"
          direction="vertical"
          centeredSlides
          slidesPerView={5}
          spaceBetween={0}
          autoHeight
          loop
          slideToClickedSlide
          onSlideChange={(swiper) => setHours(swiper.realIndex)}
        >
          {HOURS.map((hour) => (
            <SwiperSlide
              key={hour}
              className={`flex items-center justify-center ${
                hours + 1 === Number(hour)
                  ? ""
                  : Math.abs(hours - Number(hour)) >= 2
                  ? "text-xl text-text-sub-light"
                  : "text-2xl text-text-sub-light"
              }`}
            >
              {hour}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="px-4"
          direction="vertical"
          centeredSlides
          slidesPerView={5}
          spaceBetween={0}
          autoHeight
          loop
          slideToClickedSlide
          onSlideChange={(swiper) => setMinutes(swiper.realIndex)}
        >
          {MINUTES.map((minute) => (
            <SwiperSlide
              key={minute}
              className={`flex items-center justify-center ${
                minutes === Number(minute)
                  ? ""
                  : Math.abs(minutes - Number(minute)) >= 2
                  ? "text-xl text-text-sub-light"
                  : "text-2xl text-text-sub-light"
              }`}
            >
              {minute}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="px-4"
          direction="vertical"
          centeredSlides
          slidesPerView={5}
          spaceBetween={0}
          slideToClickedSlide
          onSlideChange={(swiper) => setNoons(swiper.realIndex)}
        >
          {NOON.map((noon, index) => (
            <SwiperSlide
              key={noon}
              className={`flex items-center justify-center ${
                noons === index ? "" : "text-2xl text-text-sub-light"
              }`}
            >
              {noon}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
