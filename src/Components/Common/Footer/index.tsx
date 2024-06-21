import React, { useState } from "react";
import "./styles.scss";
import { IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Footer() {
  const options = [{ name: "신목신협" }, { name: "신협" }];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("관련기관 사이트");
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const selectOption = (option: string) => {
    setSelectedOption(option);
    setOpen(false);
  };
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__text">
          <h2 className="text__title">개인정보 보호 정책</h2>
          <p className="text__desc text__infomation">
            대표자 : 정지왕 ㅣ 사업자 등록번호 : 117 - 82 - 00565 ㅣ
            통신판매업신고번호 : 2022-서울양천-0986
          </p>
          <div className="text__desc text__location">
            서울특별시 양천구 오목로 217 신협빌딩 ㅣ 전화 : 02-2601-8176 ㅣ
            개인정보보호책임자 : 서운섭 ㅣ 상호명 : 신목신용협동조합
          </div>
          <div className="text__desc text__copyright">
            COPYRIGHT ⓒ 2021. 신목신협문화센터. ALL RIGHTS RESEVED.
          </div>
        </div>
        <div className="footer__action">
          <div className="action_dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              <p>{selectedOption}</p>
              <span className={`arrow ${open ? "up" : "down"}`}>
                <IoMdArrowDropup size={20} />
              </span>
            </button>
            {open && (
              <ul className="dropdown-menu">
                {options &&
                  options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        selectOption(option.name);
                        navigate("/");
                      }}
                    >
                      {option.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
