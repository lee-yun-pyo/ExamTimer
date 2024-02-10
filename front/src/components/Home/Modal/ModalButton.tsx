interface Props {
  title: string;
  isActive: boolean;
  isMain: boolean;
  onClick: () => void;
}
export function ModalButon({ title, isActive, isMain, onClick }: Props) {
  return (
    <button
      className={`w-full text-text-dark font-semibold py-3 rounded-xl  ${
        isMain
          ? "bg-main-color dark:bg-main-color-dark"
          : "bg-subButton-bg dark:bg-subButton-bg-dark"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
