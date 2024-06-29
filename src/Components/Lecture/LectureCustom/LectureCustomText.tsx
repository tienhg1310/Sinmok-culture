import React from "react";
import infoImage2 from "../../../Assets/images/info_img02.png";
import "./LectureCustomText.scss";

type Props = {};

const LectureCustomText = (props: Props) => {
  return (
      <div className="lectureCustom__text">
        <div className="lectureCustom__title">
          <p>
            내가 원하는 강좌를 <p>마음대로 담는 맞춤강좌!</p>
          </p>
        </div>
        <div className="lectureCustom__description">
          <p>개인별 맞춤 강의를 선택할 수 있습니다.</p>
        </div>
        <div className="lectureCustom__image">
          <img src={infoImage2} alt="" />
        </div>
      </div>
  );
};

export default LectureCustomText;
