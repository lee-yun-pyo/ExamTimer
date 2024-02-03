import { EditIcon } from "@/components/Icons/EditIcon";

interface Props {
  title: string;
  hasButton: boolean;
}

export function SectionTitle({ title, hasButton }: Props) {
  const handleClick = () => {};
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h2 className="font-semibold text-[20px] text-text-default dark:text-text-dark">
          {title}
        </h2>
      </div>
      <div>
        {hasButton && (
          <button className="rounded-md p-2 bg-my-color" onClick={handleClick}>
            <EditIcon size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
