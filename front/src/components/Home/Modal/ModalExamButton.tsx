import { calculateTimeDifference } from "@/utils";

interface Props {
  title: string;
  startTime: string;
  endTime: string;
  onClick: () => void;
  isSelected: boolean;
}
export function ModalExamButton({
  title,
  startTime,
  endTime,
  onClick,
  isSelected,
}: Props) {
  const timeDifference = calculateTimeDifference(startTime, endTime);

  return (
    <div
      className={`w-full py-2.5 px-6 flex flex-col gap-px bg-modal-layer-bg dark:bg-modal-layer-bg-dark rounded-xl border-[3px] ${
        isSelected ? "border-main-color" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <span className="text-base font-semibold text-text dark:text-text-dark">
        {title}
      </span>
      <div className="flex gap-2">
        <span className="text-sm text-text dark:text-text-dark">{`${startTime} ~ ${endTime}`}</span>
        <span className="text-sm text-text dark:text-text-dark">{`(${timeDifference}분)`}</span>
      </div>
    </div>
  );
}
