import { Fragment } from "react";

import { ExamTimerIcon } from "@/components/Icons/ExamTimerIcon";
import { CalendarIcon } from "@/components/Icons/CalendarIcon";
import { HourClockIcon } from "@/components/Icons/HourClockIcon";

interface Props {
  iconName: string;
  isActive: boolean;
}

export function NavIcons({ iconName, isActive }: Props) {
  const isDarkMode = document.documentElement.classList.contains("dark");

  let iconToRender;

  switch (iconName) {
    case "HourClock":
      iconToRender = (
        <HourClockIcon size={24} isDarkMode={isDarkMode} isActive={isActive} />
      );
      break;
    case "ExamTimer":
      iconToRender = (
        <ExamTimerIcon size={24} isDarkMode={isDarkMode} isActive={isActive} />
      );
      break;
    case "Calendar":
      iconToRender = (
        <CalendarIcon size={24} isDarkMode={isDarkMode} isActive={isActive} />
      );
      break;
    default:
      break;
  }

  return <Fragment>{iconToRender}</Fragment>;
}
