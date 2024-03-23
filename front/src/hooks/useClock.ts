import { useEffect, useRef } from "react";

export function useClock<T extends HTMLElement>() {
  const secondHand = useRef<T>(null);
  const minHand = useRef<T>(null);
  const hourHand = useRef<T>(null);

  const getTimeDegree = (time: number, min?: number) => {
    if (min) return `rotate(${time * 30 + min / 2}deg)`;
    return `rotate(${(time / 60) * 360}deg)`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date(),
        seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours();
      if (secondHand.current && minHand.current && hourHand.current) {
        secondHand.current.style.transform = getTimeDegree(seconds);
        minHand.current.style.transform = getTimeDegree(minutes);
        hourHand.current.style.transform = getTimeDegree(hours, minutes);
      }
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return { secondHand, minHand, hourHand };
}
