interface Props {
  size: number;
  isDarkMode: boolean;
}
export function HourClockIcon({ size, isDarkMode }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.51555 7C3.55827 8.4301 3 10.1499 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V6M12 12L8 8"
        stroke={isDarkMode ? "#FFFFFF" : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
