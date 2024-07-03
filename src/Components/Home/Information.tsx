import React from "react";
import "./Information.scss";
import icnM1 from "../../Assets/images/icons/actions/icon_m1.png";
import icnM2 from "../../Assets/images/icons/actions/icon_m2.png";
import icnM3 from "../../Assets/images/icons/actions/icon_m3.png";
import icnM4 from "../../Assets/images/icons/actions/icon_m4.png";
import { useNavigate } from "react-router-dom";

type Props = {};

const Information = (props: Props) => {
  const fakeData = [
    {
      title: "온라인 신청가이드",
      desc: "온라인으로 빠르고 간편하게!",
      icon: icnM1,
      path: "/lecture/register-info",
    },
    {
      title: "분실물 조회",
      desc: "분실물을 조회하세요",
      icon: icnM2,
      path: "#",
    },
    {
      title: "Q&A",
      desc: "온라인으로 빠르고 간편하게!",
      icon: icnM3,
      path: "/board/exhibition",
    },
    {
      title: "오시는길",
      desc: "신목신협 문화센터 위치안내",
      icon: icnM4,
      path: "#",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="information__container">
      {fakeData.map((item) => (
        <div key={item.title} className="information-item" onClick={() => navigate(item.path)}>
          <div className="information-img">
            <img src={item.icon} alt="" />
          </div>
          <div className="information-text">
            <p className="information-title">{item.title}</p>
            <p className="information-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
