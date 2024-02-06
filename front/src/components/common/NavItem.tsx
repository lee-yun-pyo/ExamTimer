import { Link } from "react-router-dom";

import { NavIcons } from "./NavIcons";

interface Props {
  title: string;
  iconName: string;
  path: string;
  isActive: boolean;
}

export function NavItem({ title, iconName, path, isActive }: Props) {
  return (
    <li>
      <Link to={path}>
        <div className="flex flex-col items-center gap-1">
          <NavIcons iconName={iconName} isActive={isActive} />
          <span
            className={`text-sm ${
              isActive
                ? "text-my-color font-semibold"
                : "text-text-default dark:text-text-dark"
            } `}
          >
            {title}
          </span>
        </div>
      </Link>
    </li>
  );
}
