import React, { type FC } from "react";
import "./LectureCard.scss";
import { IoBagAddOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { ILecture } from "../../../Constants/interface";

type Props = {
  lecture: ILecture;
};

const LectureCard: FC<Props> = ({ lecture }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={lecture.image_url} alt="Image" />
        </div>

        <div className="card-info-content">
          <div className="status-wrapper">
            <span className="status orange">접수중</span>
            <span className="status black">성인강좌</span>
          </div>

          <div className="text-content">
            <h2>{lecture.title}</h2>
            <p>
              {lecture.semester} | {lecture.fee}
              <br />
              {lecture.date_range}
              <br />
              {lecture.time}
            </p>
            <div className="card-info-button">
              <button>
                <IoBagAddOutline className="icon" />
                <span>장바구니담기</span>
              </button>
              <button>
                <IoCheckmark className="icon icon-check" />
                <span>자세히보기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureCard;
