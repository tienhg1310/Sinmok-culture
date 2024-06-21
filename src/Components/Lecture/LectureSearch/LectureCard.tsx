import { type FC } from "react";
import { IoBagAddOutline, IoCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ILecture } from "../../../Constants/interface";
import "./LectureCard.scss";

type Props = {
  lecture: ILecture;
};

const LectureCard: FC<Props> = ({ lecture }) => {
  const navigation = useNavigate();

  const handleLectureDetail = () => {
    navigation(`/lecture/find?id=${lecture.id}`);
  };

  return (
    <div className="card" onClick={handleLectureDetail}>
      <div className="card-content">
        <div className="card-image">
          <img src={lecture.image_url} alt="Image" />
        </div>

        <div className="card-info-content">
          <div className="status-wrapper">
            {lecture.registration_status === "접수중" ? (
              <span className="status orange">
                {lecture.registration_status}
              </span>
            ) : (
              <span className="status gray">{lecture.registration_status}</span>
            )}
            <span className="status black">{lecture.category}</span>
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
