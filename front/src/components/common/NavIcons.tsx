import { Fragment } from "react";

import { ExamTimerIcon } from "@/components/Icons/ExamTimerIcon";
import { CalendarIcon } from "@/components/Icons/CalendarIcon";
import { HourClockIcon } from "@/components/Icons/HourClockIcon";

interface Props {
  iconName: string;
  isActive: boolean;
}

export function NavIcons({ iconName, isActive }: Props) {
  let iconToRender;

  switch (iconName) {
    case "HourClock":
      iconToRender = <HourClockIcon size={20} isActive={isActive} />;
      break;
    case "ExamTimer":
      iconToRender = <ExamTimerIcon size={20} isActive={isActive} />;
      break;
    case "Calendar":
      iconToRender = <CalendarIcon size={20} isActive={isActive} />;
      break;
    default:
      break;
  }

  return <Fragment>{iconToRender}</Fragment>;
}
