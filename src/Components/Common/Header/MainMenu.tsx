import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.scss";
import { MenuItem } from "../../../Constants/MenuItem";

type Props = {};

const MainMenu: FC<Props> = () => {
  return (
    <ul className="header-menu-content">
      {MenuItem.map((item, index) => (
        <li key={index} className="menu-item">
          <Link to={item.path}>{item.name}</Link>
          {/* {showSubMenu && ( */}
          <ul className="submenu">
            {item.childrens &&
              item.childrens.map((child, index) => (
                <li key={index}>
                  <Link to={child.path}>{child.name}</Link>
                </li>
              ))}
          </ul>
          {/* )} */}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
