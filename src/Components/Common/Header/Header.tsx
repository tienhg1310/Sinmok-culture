import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import MenuDecoGif from "../../../Assets/images/menu_deco.gif";
import sitemapBtn from "../../../Assets/images/sitemap_btn.png";
import { AppDispatch, RootState } from "../../../Modules/store/store";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import "./header.scss";
import { getCart } from "../../../Modules/store/slices/cartSlice";

//code here
const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const { cart, status } = useSelector((state: RootState) => state.cart);

  const toggleMenu = () => {
    isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true);
  };

  const showSubMenu = () => {
    setIsShowSubMenu(true);
  };
  const hideSubMenu = () => {
    setIsShowSubMenu(false);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <div className="header">
        <div className="layout">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-menu" onMouseOver={showSubMenu} onMouseLeave={hideSubMenu}>
            <MainMenu />
          </div>
          <div className="header-action">
            <ul className="etc-action">
              <li>
                <div className="login" onClick={() => navigate("/auth/login")}>
                  로그인
                </div>
              </li>
              <li>
                <div onClick={() => navigate("/auth/register")}>회원가입</div>
              </li>
              <li className="cart" onClick={() => navigate("/cart")}>
                <HiOutlineShoppingBag size={30} />
                <p>{cart.length}</p>
              </li>
            </ul>
            <div className="etc-btn">
              <img src={sitemapBtn} className="btn-menu" onClick={toggleMenu} alt="sitemap" />
            </div>
          </div>
        </div>
        {/* Modal etc */}
        <div className={`${isShowMenu && "active"} menu-content`} onClick={toggleMenu}>
          <div className={`wrap-menu`}>
            <MobileMenu toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {isShowSubMenu && (
        <div className="header-space">
          <img src={MenuDecoGif} className="header-img" alt="menu deco" />
        </div>
      )}
    </>
  );
};

export default Header;
