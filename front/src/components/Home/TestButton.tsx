interface Props {
  title: string;
  time?: string;
  onClick: () => void;
}
export function TestButton({ title, time, onClick }: Props) {
  return (
    <div
      className="gap-px bg-button-bg dark:bg-button-bg-dark rounded-xl flex flex-col items-center justify-center shadow-md h-16 cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold text-lg text-text dark:text-text-dark">
        {title}
      </span>
      {time && (
        <span className="text-sm text-text dark:text-text-dark">{time}</span>
      )}
    </div>
  );
}
