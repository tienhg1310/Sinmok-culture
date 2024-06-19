import React, { type FC } from "react";
import { useLocation } from "react-router-dom";
import { useFindItemWithPath } from "../../../Modules/hooks/useFindItemWithPath";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import SectionNavigation from "../../Common/SectionNavigation/SectionNavigation";
import "./Layout.scss";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const route = useLocation();
  const { breadsrcumb, childrens } = useFindItemWithPath(route);
  const breadscrumbs = [
    breadsrcumb?.name || "",
    breadsrcumb?.child?.name || "",
  ];
  const childrenActive = childrens?.find(
    (children) => breadsrcumb?.child?.name === children.name
  );

  return (
    <div className="wrapper">
      <SectionHeader
        title={breadsrcumb?.child?.name || ""}
        breadscrumbs={breadscrumbs}
      />
      <SectionNavigation
        childrens={childrens}
        childrenActive={childrenActive}
      />
      {children}
    </div>
  );
};

export default Layout;
