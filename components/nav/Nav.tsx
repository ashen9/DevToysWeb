import React from "react";

import { Nav } from "../../data/locales/types";
import { VSpacerS } from "../Spacer";
import Divider from "./Divider";
import NavCategory from "./NavCategory";
import SearchInput from "./SearchInput";

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  const home = nav[0];

  return (
    <ul>
      <li>
        <SearchInput />
        <VSpacerS />
      </li>
      <li>
        <VSpacerS />
        <NavCategory category={home} />
        <VSpacerS />
        <Divider />
        <VSpacerS />
      </li>
      {nav.slice(1).map((category) => (
        <React.Fragment key={category.title}>
          <li>
            <NavCategory category={category} />
            <VSpacerS />
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default _Nav;
