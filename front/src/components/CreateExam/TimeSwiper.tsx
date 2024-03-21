import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  initialSlide: number;
  timeData: string[];
  onSlideChange: (swiper: SwiperClass) => void;
  currentState: number;
}

export function TimeSwiper({
  initialSlide,
  timeData,
  onSlideChange,
  currentState,
}: Props) {
  const isSameValueWithCurrentState = (currentState: number, value: string) => {
    return currentState === Number(value);
  };

  const isExistNearCurrentValue = (currentState: number, value: string) => {
    return Math.abs(currentState - Number(value)) >= 2;
  };

  return (
    <Swiper
      className="px-4"
      direction="vertical"
      centeredSlides
      slidesPerView={5}
      spaceBetween={0}
      autoHeight
      loop
      slideToClickedSlide
      initialSlide={initialSlide}
      onSlideChange={(swiper) => onSlideChange(swiper)}
    >
      {timeData.map((data) => (
        <SwiperSlide
          key={data}
          className={`flex items-center justify-center ${
            isSameValueWithCurrentState(currentState, data)
              ? ""
              : isExistNearCurrentValue(currentState, data)
              ? "text-xl text-text-sub-light"
              : "text-2xl text-text-sub-light"
          }`}
        >
          {data}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
