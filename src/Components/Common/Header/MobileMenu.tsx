import React, { FC } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import "./MobileMenu.scss";
import { MenuItem } from "../../../Constants/MenuItem";

type Props = {
  toggleMenu: () => void;
};

const MobileMenu: FC<Props> = ({ toggleMenu }) => {
  return (
    <>
      <div className="close-btn" onClick={toggleMenu}>
        <TfiClose className="icon" />
      </div>
      <div className="menu">
        <div className="menu-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-action">
          <div>
            <button className="btn-signin">로그인</button>
          </div>
          <div>
            <button className="btn-signup">회원가입</button>
          </div>
        </div>
        <div className="menu-item">
          <ul className="item-list">
            {MenuItem.map((item, index) => (
              <li key={index} className="item">
                <Link to={item.path || ""}>{item.name}</Link>
                <ul className="subitem-list">
                  {item.childrens &&
                    item.childrens.map((child, index) => (
                      <li key={index}>
                        <Link to={child.path || ""}>{child.name}</Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-bottom"></div>
      </div>
    </>
  );
};

export default MobileMenu;
