interface Props {
  title: string;
  time: string;
  onClick: () => void;
}
export function ModalExamButton({ title, time, onClick }: Props) {
  return (
    <div
      className="w-full py-3 px-6 flex items-center bg-examBtn-default dark:bg-examBtn-dark rounded-xl"
      onClick={onClick}
    >
      <span className="text-xl font-semibold text-text-default dark:text-text-dark">
        {title}
      </span>
      <div className="flex flex-col ml-6 gap-1">
        <span className="text-base font-semibold text-text-default dark:text-text-dark">
          {time}
        </span>
        <span className="text-base text-text-default dark:text-text-dark">
          80분
        </span>
      </div>
    </div>
  );
}
