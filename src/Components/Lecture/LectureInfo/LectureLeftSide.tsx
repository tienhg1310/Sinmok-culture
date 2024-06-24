import { useState, type FC } from "react";
import { RiKakaoTalkFill, RiShareLine, RiSingleQuotesR } from "react-icons/ri";
import type { ILecture } from "../../../Constants/interface";
import "./LectureLeftSide.scss";

type Props = {
  lecture: ILecture;
};

const LectureLeftSide: FC<Props> = ({ lecture }) => {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="infomation-image">
      <div className="image">
        <img src={lecture.image_url} alt="" />
      </div>
      <div className="share">
        <div className="review">
          <span>수강후기 </span>
          <strong>{lecture.reviews.length}</strong>
        </div>
        <div className="share-section">
          <div className={`share-icon ${shareOpen && "open"}`}>
            <RiShareLine
              size={40}
              color="#999999"
              onClick={() => setShareOpen(!shareOpen)}
            />
            <RiKakaoTalkFill
              size={40}
              className={`talk ${shareOpen && "open"}`}
            />
            <RiSingleQuotesR
              size={40}
              className={`single-quote ${shareOpen && "open"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureLeftSide;
