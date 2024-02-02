interface Props {
  title: string;
  time?: string;
  onClick: () => void;
}
export function TestButton({ title, time, onClick }: Props) {
  return (
    <div
      className="gap-px bg-examBtn-default dark:bg-examBtn-dark rounded-xl flex flex-col items-center justify-center shadow-md w-40 h-16 cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold text-xl text-text-default dark:text-text-dark">
        {title}
      </span>
      {time && (
        <span className="text-sm text-text-default dark:text-text-dark">
          {time}
        </span>
      )}
    </div>
  );
}
