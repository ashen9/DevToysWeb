import Link from "next/link";

import { NavItem } from "../../data/locales/types";

interface NavCardProps {
  navItem: NavItem;
}

const NavCard: React.VFC<NavCardProps> = ({ navItem }) => {
  return (
    <Link href={navItem.href}>
      <div className="h-72 w-36 rounded border border-light-40 bg-light-10 p-3 hover:cursor-pointer hover:border-gray-300 dark:border-dark-30 dark:bg-dark-30 dark:hover:border dark:hover:border-dark-20">
        <div className="m-5 mb-8 flex h-20 w-20 items-center justify-center rounded dark:bg-dark-20">
          <navItem.icon large={true} />
        </div>
        <div>
          <div className="text-sm">{navItem.longTitle}</div>
          <div className="pt-1 text-xs text-gray-400">{navItem.desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default NavCard;
