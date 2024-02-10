import { Fragment } from "react";

import { EditIcon } from "@/components/Icons/EditIcon";

interface Props {
  title: string;
  hasButton: boolean;
}

export function SectionTitle({ title, hasButton }: Props) {
  const handleClick = () => {};
  return (
    <div className="flex justify-between items-center w-full py-2">
      <Fragment>
        <h2 className="font-semibold text-lg text-text dark:text-text-dark">
          {title}
        </h2>
      </Fragment>
      <div>
        {hasButton && (
          <button className="rounded-md p-1" onClick={handleClick}>
            <EditIcon size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
