import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import sitemapBtn from "../../../Assets/images/sitemap_btn.png";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import "./Header.scss";

//code here
const Header: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const toggleMenu = () => {
    isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true);
  };

  const showSubMenu = () => {
    setIsShowSubMenu(true);
  };
  const hideSubMenu = () => {
    setIsShowSubMenu(false);
  };

  return (
    <>
      <div className="header">
        <div className="layout">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            className="header-menu"
            onMouseOver={showSubMenu}
            onMouseLeave={hideSubMenu}
          >
            <MainMenu />
          </div>
          <div className="header-action">
            <ul className="etc-action">
              <li>
                <div className="login">로그인</div>
              </li>
              <li>
                <div>회원가입</div>
              </li>
            </ul>
            <div className="etc-btn">
              <img src={sitemapBtn} className="btn-menu" onClick={toggleMenu} />
            </div>
          </div>
        </div>
        {/* Modal etc */}
        <div className={`${isShowMenu && "active"} menu-content`}>
          <div className={`wrap-menu`}>
            <MobileMenu toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {isShowSubMenu && (
        <div className="header-space">
          <img src="" alt="" />
        </div>
      )}
    </>
  );
};

export default Header;
