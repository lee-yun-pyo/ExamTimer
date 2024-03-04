import { MouseEvent } from "react";

interface Props {
  size: number;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export function DeleteIcon({ size, onClick }: Props) {
  return (
    <div
      className="bg-main-color p-1.5 rounded-full absolute top-[-4px] left-[-6px]"
      onClick={(e) => onClick(e)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L18 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
