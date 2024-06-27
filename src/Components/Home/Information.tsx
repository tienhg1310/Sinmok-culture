import React from "react";
import "./Information.scss";
import icnM1 from "../../Assets/images/icons/actions/icon_m1.png";

type Props = {};

const Information = (props: Props) => {
  return (
    <div className="information__container">
      {new Array(4).fill(0).map((_, index) => (
        <div key={index} className="information-item">
          <div className="information-img">
            <img src={icnM1} alt="" />
          </div>
          <div className="information-text">
            <p className="information-title">온라인 신청가이드</p>
            <p className="information-desc">온라인으로 빠르고 간편하게!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
