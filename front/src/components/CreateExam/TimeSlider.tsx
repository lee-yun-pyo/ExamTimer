import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

import { TimeSwiper } from "@/components/CreateExam/TimeSwiper";

import { useSetTimeContext } from "@/hooks/useSetTimeContext";

import { HOURS, MINUTES, TimeUnitType } from "@/constants";

export function TimeSlider() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const { handleChangeTimeRef, startTime, endTime, timeMode } =
    useSetTimeContext();

  const [hourRef, minuteRef] = (timeMode === 1 ? startTime : endTime)
    .split(":")
    .map(Number);

  const handleSlideChange = (timeUnit: TimeUnitType, swiper: SwiperClass) => {
    switch (timeUnit) {
      case TimeUnitType.HOURS:
        setHours(swiper.realIndex);
        break;
      case TimeUnitType.MINUTES:
        setMinutes(swiper.realIndex);
        break;
    }
  };

  useEffect(() => {
    handleChangeTimeRef(hours, minutes);
  }, [hours, minutes]);

  return (
    <div
      className={`w-full h-80 rounded-b-lg text-text dark:text-text-dark
       transition-transform duration-300 transform origin-top flex items-center`}
    >
      <div className="h-[65px] border-y-2 border-y-red-300 w-full absolute" />
      <div className="w-full flex justify-around text-3xl font-semibold h-full">
        <TimeSwiper
          initialSlide={hourRef}
          timeData={HOURS}
          currentState={hours}
          onSlideChange={(swiper) =>
            handleSlideChange(TimeUnitType.HOURS, swiper)
          }
        />
        <TimeSwiper
          initialSlide={minuteRef}
          timeData={MINUTES}
          currentState={minutes}
          onSlideChange={(swiper) =>
            handleSlideChange(TimeUnitType.MINUTES, swiper)
          }
        />
      </div>
    </div>
  );
}
