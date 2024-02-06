interface Props {
  title: string;
  time: string;
  onClick: () => void;
}
export function ModalExamButton({ title, time, onClick }: Props) {
  return (
    <div
      className="w-full py-3 px-6 flex flex-col gap-px bg-examBtn-default dark:bg-examBtn-dark rounded-xl"
      onClick={onClick}
    >
      <span className="text-base font-semibold text-text-default dark:text-text-dark">
        {title}
      </span>
      <div className="flex gap-2">
        <span className="text-sm text-text-default dark:text-text-dark">
          {time}
        </span>
        <span className="text-sm text-text-default dark:text-text-dark">
          (80분)
        </span>
      </div>
    </div>
  );
}
