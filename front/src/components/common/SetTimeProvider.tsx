import { ReactNode, createContext, useRef, useState } from "react";

import { convertToTimeFormat } from "@/utils";

interface SetTimeContextType {
  startTime: string;
  endTime: string;
  timeRef: string;
  handleChangeTimeState: () => void;
  handleChangeTimeRef: (hour: number, minute: number) => void;
  handleSetTimeMode: (mode: number) => void;
  timeMode: number;
}

export const SetTimeContext = createContext<SetTimeContextType>({
  startTime: "",
  endTime: "",
  timeRef: "00:00",
  handleChangeTimeState: () => {},
  handleChangeTimeRef: () => {},
  handleSetTimeMode: () => {},
  timeMode: 1,
});

interface SetTimeProviderProps {
  children: ReactNode;
}

export function SetTimeProvider({ children }: SetTimeProviderProps) {
  const [startTime, setStartTime] = useState(""); // 시작 시간
  const [endTime, setEndTime] = useState(""); // 종료 시간
  const [timeMode, setTimeMode] = useState(1); // 변경할 시간 종류 선택

  const timeRef = useRef<string>("00:00"); // 변경 중인 시간

  /**
   *  슬라이더를 이용한 시간 변경 시 값 유지
   * @param hour 시
   * @param minute 분
   */
  const handleChangeTimeRef = (hour: number, minute: number) => {
    timeRef.current = convertToTimeFormat(hour, minute);
  };

  /**
   * 시간 종류에 따른 시간 상태 변경
   */
  const handleChangeTimeState = () => {
    if (timeMode === 1) {
      setStartTime(timeRef.current);
    } else {
      setEndTime(timeRef.current);
    }
  };

  /**
   * 변경 시간 종류 설정
   * @param mode 시간 종류 (1. 시작시간, 2. 종료 시간)
   */
  const handleSetTimeMode = (mode: number) => {
    setTimeMode(mode);
  };

  return (
    <SetTimeContext.Provider
      value={{
        startTime,
        endTime,
        handleChangeTimeState,
        timeRef: timeRef.current,
        handleChangeTimeRef,
        handleSetTimeMode,
        timeMode,
      }}
    >
      {children}
    </SetTimeContext.Provider>
  );
}
