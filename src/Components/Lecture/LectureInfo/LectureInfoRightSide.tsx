import React, { type FC } from "react";
import "./LectureInfoRightSide.scss";
import type { ILecture } from "../../../Constants/interface";

type Props = {
  lecture: ILecture;
};

const LectureInfoRightSide: FC<Props> = ({ lecture }) => {
  return (
    <div className="information-text">
      <div className="text-section-header flex-row">
        <div className="registration-status">
          <span>{lecture.registration_status}</span>입니다.
        </div>
        <div className="registration-tag">단기</div>
      </div>
      <div className="text-section flex-col">
        <div className="registration-time">
          <span className="title">접수기간</span>
          <span className="desc">2024.06.18 10:00:00~2024.06.28 10:00:00</span>
        </div>
        <div className="lecture-time">
          <span className="title">수강기간</span>
          <span className="desc">2024.07.03~2024.08.21</span>
        </div>
      </div>
      <div className="text-section flex-col">
        <div className="lecture-semester">
          <span className="title">학기</span>
          <span className="desc">2024년 여름학기</span>
        </div>
        <div className="lecture-instructor-name">
          <span className="title">박성희</span>
          <span className="desc">박성희</span>
        </div>
        <div className="lecture-class-time">
          <span className="title">접수기간</span>
          <span className="desc"> (수) 16:00 ~ 17:30</span>
        </div>
      </div>
      <div className="text-section flex-col">
        <div className="lecture-fee">
          <span className="title">수강료</span>
          <span className="total">42,000원</span>
        </div>
      </div>
    </div>
  );
};

export default LectureInfoRightSide;
