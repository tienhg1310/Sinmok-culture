import { type FC } from "react";
import { IoBagAddOutline, IoCheckmark } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ILecture } from "../../../Constants/interface";
import { addToCart } from "../../../Modules/store/slices/cartSlice";
import { AppDispatch } from "../../../Modules/store/store";
import noImage from "../../../Assets/images/noimg.jpg"
import "./LectureCard.scss";

type Props = {
  lecture: ILecture;
};

const LectureCard: FC<Props> = ({ lecture }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLectureDetail = (paramName: string) => {
    navigation(`/lecture/find?${paramName}=${lecture.id}`);
  };

  const handleAddToCart = () => {
    if (window.confirm("장바구니에 제품을 추가하시겠습니까?")) {
      dispatch(addToCart(lecture));
      return;
    }

  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={noImage} alt="Thumbnail for lecture" />
        </div>

        <div className="card-info-content">
          <div className="status-wrapper">
            {lecture.registration_status === "접수중" ? (
              <span className="status orange">{lecture.registration_status}</span>
            ) : (
              <span className="status gray">{lecture.registration_status}</span>
            )}
            <span className="status black">{lecture.category}</span>
          </div>

          <div className="text-content">
            <h2 onClick={() => handleLectureDetail("id")}>{lecture.title}</h2>
            <div>
              <p>
                {lecture.semester} | {lecture.fee}
              </p>
              <p>{lecture.date_range}</p>
              <p>{lecture.time}</p>
            </div>
            <div className="card-info-button">
              <button onClick={handleAddToCart}>
                <IoBagAddOutline className="icon" />
                <span>장바구니담기</span>
              </button>
              <button onClick={() => handleLectureDetail("id")}>
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
