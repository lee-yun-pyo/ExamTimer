import { MouseEvent } from "react";

import { DeleteIcon } from "@/components/Icons/DeleteIcon";

interface Props {
  title: string;
  time?: string;
  onExamBtnClick: () => void;
  onDeleteBtnClick?: (event: MouseEvent<HTMLDivElement>) => void;
  isEdit?: boolean;
}
export function TestButton({
  title,
  time,
  onExamBtnClick,
  onDeleteBtnClick,
  isEdit,
}: Props) {
  return (
    <div
      className="relative gap-px bg-button-bg dark:bg-button-bg-dark rounded-xl flex flex-col items-center justify-center shadow-md h-16 cursor-pointer"
      onClick={onExamBtnClick}
    >
      <span className="font-semibold text-lg text-text dark:text-text-dark">
        {title}
      </span>
      {time && (
        <span className="text-sm text-text dark:text-text-dark">{time}</span>
      )}
      {isEdit && <DeleteIcon size={15} onClick={onDeleteBtnClick!} />}
    </div>
  );
}
