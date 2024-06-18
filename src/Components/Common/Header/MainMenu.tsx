import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.scss";

type Props = {};

const MainMenu: FC<Props> = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseOver = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <ul
      className="header-menu-content"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <li className="menu-item">
        <Link to={"#"}>수강신청</Link>
        {showSubMenu && (
          <ul className="submenu">
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
        )}
      </li>
      <li className="menu-item">
        <Link to={"#"}>커뮤니티</Link>
        {showSubMenu && (
          <ul className="submenu">
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
        )}
      </li>
      <li className="menu-item">
        <Link to={"#"}>이용안내</Link>
        {showSubMenu && (
          <ul className="submenu">
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
        )}
      </li>
      <li className="menu-item">
        <Link to={"#"}>마이페이지</Link>
        {showSubMenu && (
          <ul className="submenu">
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
        )}
      </li>
      {/* <div className="submenu_asset"></div> */}
    </ul>
  );
};

export default MainMenu;
