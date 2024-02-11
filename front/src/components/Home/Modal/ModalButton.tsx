interface Props {
  title: string;
  isActive: boolean;
  isMain: boolean;
  onClick: () => void;
}
export function ModalButon({ title, isActive, isMain, onClick }: Props) {
  return (
    <button
      className={`w-full text-text-dark disabled:text-text-disabled font-semibold py-3 rounded-xl ${
        isMain
          ? !isActive
            ? "bg-main-color-disabled"
            : "bg-main-color dark:bg-main-color-dark"
          : "bg-subButton-bg dark:bg-subButton-bg-dark"
      }`}
      disabled={!isActive && isMain}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
