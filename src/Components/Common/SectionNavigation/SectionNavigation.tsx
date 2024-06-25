import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { MenuItemType } from "../../../Constants/MenuItem";
import "./SectionNavigation.scss";

type Props = {
  childrens?: MenuItemType[] | undefined;
  childrenActive?: MenuItemType;
};

const SectionNavigation: FC<Props> = ({ childrens, childrenActive }) => {
  const navigation = useNavigate();

  return (
    <div
      className={`grid-template-columns-${
        childrens !== undefined && childrens.length >= 4 ? 4 : childrens?.length
      } section_navigation-content`}
    >
      {childrens &&
        childrens.map((item, index) => (
          <div
            key={index}
            id={`section_navigation-item-${index}`}
            className={`section_navigation-item  ${
              childrenActive?.path === item.path && "active"
            }`}
            onClick={() => navigation(item.path)}
          >
            <div className="section_navigation-text">
              <Link to={item.path}>{item.name}</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SectionNavigation;
