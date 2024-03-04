import { Fragment } from "react";

import { EditIcon } from "@/components/Icons/EditIcon";

interface Props {
  title: string;
  hasButton: boolean;
  onClick?: () => void;
}

export function SectionTitle({ title, hasButton, onClick }: Props) {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <Fragment>
        <h2 className="font-semibold text-lg text-text dark:text-text-dark">
          {title}
        </h2>
      </Fragment>
      <div>
        {hasButton && (
          <button
            className="rounded-lg p-1.5 bg-main-color dark:bg-main-color-dark"
            onClick={onClick}
          >
            <EditIcon size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
