import { useNavigate } from "react-router-dom";

import { IS_DARK_MODE } from "@/constants";

interface Props {
  size: number;
}

export function BackIcon({ size }: Props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20L7 12L15 4"
          stroke={IS_DARK_MODE ? "#FFFFFF" : "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
