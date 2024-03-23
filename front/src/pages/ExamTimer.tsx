import { useLocation } from "react-router-dom";

import { DBExamInfoType } from "@/types";
import { CLOCK_NUMS } from "@/constants";

import { useClock } from "@/hooks/useClock";

export function ExamTimer() {
  const { state } = useLocation();
  const examInfo = state as DBExamInfoType;
  const { startTime, endTime, examName } = examInfo;
  const { secondHand, minHand, hourHand } = useClock();

  return (
    <>
      <div className="flex min-h-lvh items-center justify-center bg-theme-light dark:bg-theme-dark">
        <div>
          <div
            style={{
              boxShadow:
                "0 15px 25px rgba(0, 0, 0, 0.1), 0 25px 45px rgba(0, 0, 0, 0.1)",
            }}
            className="relative flex h-[400px] w-[400px] bg-theme-light dark:bg-black rounded-full items-center justify-center"
          >
            {CLOCK_NUMS.map((num) => (
              <label
                key={num}
                style={{ transform: `rotate(calc(${num * (360 / 12)}deg))` }}
                className="inset-[20px] absolute text-center"
              >
                <span
                  style={{ transform: `rotate(calc(${num * (-360 / 12)}deg))` }}
                  className="inline-block text-2xl font-semibold text-text dark:text-text-dark"
                >
                  {num}
                </span>
              </label>
            ))}
            <div
              className="absolute h-4 w-4 flex justify-center
              before:z-[100] before:absolute before:h-full before:w-full before:rounded-full
              before:bg-theme-dark dark:before:bg-theme-light before:border-4 before:border-red-500"
            >
              <span
                ref={secondHand}
                className="clock-hands h-[150px] w-[3px] bg-red-500"
              />
              <span
                ref={minHand}
                className="clock-hands h-[120px] w-[5px] bg-theme-dark dark:bg-theme-light"
              />
              <span
                ref={hourHand}
                className="clock-hands h-[80px] w-[7px] bg-theme-dark dark:bg-theme-light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
