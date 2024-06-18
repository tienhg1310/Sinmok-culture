import React, { FC } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import "./MobileMenu.scss";

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
            <li className="item">
              <Link to="/about">수강신청</Link>
              <ul className="subitem-list">
                <li>
                  <Link to={"#"}>강좌검색</Link>
                </li>
                <li>
                  <Link to={"#"}>수강신청안내</Link>
                </li>
                <li>
                  <Link to={"#"}>강의스케쥴</Link>
                </li>
                <li>
                  <Link to={"#"}>맞춤강좌</Link>
                </li>
              </ul>
            </li>
            <li className="item">
              <Link to="/about">커뮤니티</Link>
              <ul className="subitem-list">
                <li>
                  <Link to={"#"}>공지사항</Link>
                </li>
                <li>
                  <Link to={"#"}>수강후기</Link>
                </li>
                <li>
                  <Link to={"#"}>갤러리</Link>
                </li>
              </ul>
            </li>
            <li className="item">
              <Link to="/about">이용안내</Link>
              <ul className="subitem-list">
                <li>
                  <Link to={"#"}>신목신협 문화센터</Link>
                </li>
                <li>
                  <Link to={"#"}>Q&A</Link>
                </li>
                <li>
                  <Link to={"#"}>강사지원</Link>
                </li>
                <li>
                  <Link to={"#"}>오시는길</Link>
                </li>
              </ul>
            </li>
            <li className="item">
              <Link to="/about">마이페이지</Link>
              <ul className="subitem-list">
                <li>
                  <Link to={"#"}>회원정보</Link>
                </li>
                <li>
                  <Link to={"#"}>수강내역</Link>
                </li>
                <li>
                  <Link to={"#"}>나의수강후기</Link>
                </li>
                <li>
                  <Link to={"#"}>결제내역</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="menu-bottom"></div>
      </div>
    </>
  );
};

export default MobileMenu;
