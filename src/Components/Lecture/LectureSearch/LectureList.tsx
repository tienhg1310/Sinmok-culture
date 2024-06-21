import { FC } from "react";
import LectureCard from "./LectureCard";
import "./LectureList.scss";

type Props = {
  lectureList: any;
};

const LectureList: FC<Props> = ({ lectureList }) => {
  return (
    <div className="lecture-list-container">
      {lectureList.map((lecture: any) => (
        <LectureCard key={lecture.title} lecture={lecture}/>
      ))}
    </div>
  );
};

export default LectureList;
