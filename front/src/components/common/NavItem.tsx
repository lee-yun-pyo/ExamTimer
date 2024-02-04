import { Link } from "react-router-dom";

import { NavIcons } from "./NavIcons";

interface Props {
  title: string;
  iconName: string;
  path: string;
}

export function NavItem({ title, iconName, path }: Props) {
  return (
    <li>
      <Link to={path}>
        <div className="flex flex-col items-center gap-1">
          <NavIcons iconName={iconName} />
          <span className="text-base text-text-default dark:text-text-dark">
            {title}
          </span>
        </div>
      </Link>
    </li>
  );
}
