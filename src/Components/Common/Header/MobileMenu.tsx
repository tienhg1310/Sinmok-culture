import { FC } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import { MenuItem } from "../../../Constants/MenuItem";
import "./MobileMenu.scss";

type Props = {
  toggleMenu: () => void;
};

const MobileMenu: FC<Props> = ({ toggleMenu }) => {
  const navigate = useNavigate()

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
            <button className="btn-signin" onClick={() =>navigate("/auth/login")}>로그인</button>
          </div>
          <div>
            <button className="btn-signup" onClick={() => navigate("/auth/register")}>회원가입</button>
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
