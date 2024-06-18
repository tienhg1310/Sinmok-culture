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
  const findItemWithPath = useFindItemWithPath(route);
  const breadscrumbs = [
    findItemWithPath?.name || "",
    findItemWithPath?.child?.name || "",
  ];

  return (
    <div className="wrapper">
      <SectionHeader
        title={findItemWithPath?.child?.name || ""}
        breadscrumbs={breadscrumbs}
      />
      <SectionNavigation />
      {children}
    </div>
  );
};

export default Layout;
