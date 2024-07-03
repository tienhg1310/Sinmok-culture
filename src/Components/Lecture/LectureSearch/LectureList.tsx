import { FC } from "react";
import LectureCard from "./LectureCard";
import { ILecture } from "../../../Constants/interface";

type Props = {
  lectureList: ILecture[];
};

const LectureList: FC<Props> = ({ lectureList }) => {
  return (
    <div className="lecture-list-container">
      {lectureList.map((lecture: ILecture) => (
        <LectureCard key={lecture.title} lecture={lecture} />
      ))}
    </div>
  );
};

export default LectureList;
