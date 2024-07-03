import { FC, useEffect } from "react";
import { useGetLecture } from "../../../Modules/hooks/useGetLecture";
import DataError from "../../Common/DataError/DataError";
import "./LectureInfo.scss";
import LectureInfoRightSide from "./LectureInfoRightSide";
import LectureLeftSide from "./LectureLeftSide";
import { useNavigate } from "react-router-dom";
import { IoBagAddOutline, IoCheckmark } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Modules/store/store";
import { addToCart } from "../../../Modules/store/slices/cartSlice";

type Props = {
  lectureId: string;
};

const LectureInfo: FC<Props> = ({ lectureId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { lecture, fetchData, error } = useGetLecture();

  const applyPaymentLecture = () => {
    if (lecture) {
      dispatch(addToCart(lecture));
      navigate(`/lecture/find?payment=${lectureId}`);
    }
  };

  useEffect(() => {
    if (lectureId) fetchData(lectureId);
  }, [fetchData, lectureId]);

  return (
    <>
      {lecture ? (
        <div className="lectureInfo__container">
          <div className="lectureInfo__header">
            <div className="header-tag">
              <span className="tag orange">{lecture.registration_status}</span>
              <span className="tag black">{lecture.category}</span>
            </div>
            <div className="header-name">
              <span>{lecture.title}</span>
            </div>
          </div>
          <div className="lectureInfo__information">
            <LectureLeftSide lecture={lecture} />
            <LectureInfoRightSide lecture={lecture} />
            <div></div>
          </div>
          <div className="lectureInfo__action">
            <button className="back-button" onClick={() => navigate(-1)}>
              목록
            </button>
            <div className="payment-button">
              <button className="button" onClick={applyPaymentLecture}>
                <span>신청하기</span> <IoCheckmark size={20} className="icon" />
              </button>
              <button className="button black">
                <span>장바구니 담기</span>
                <IoBagAddOutline size={20} className="icon" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <DataError message={error} />
      )}
    </>
  );
};

export default LectureInfo;
