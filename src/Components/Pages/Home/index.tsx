import "./index.scss";
import mainVisual from "../../../Assets/images/main_visual.png";
import { useGetLectureList } from "../../../Modules/hooks/useGetLectureList";
import Carousel from "../../Home/Carousel";
import CourseCarousel from "../../Home/CourseCarousel";
import Action from "../../Home/Action";
import Notification from "../../Home/Notification";
import Information from "../../Home/Information";
import { memo } from "react";
function Home() {
  const images = [mainVisual];
  const { lectureList } = useGetLectureList(true);

  return (
    <main>
      <Carousel images={images} interval={10000} />
      <div className="homepage_wrapper">
        <CourseCarousel lectureList={lectureList} />
        <Action />
        <Notification />
        <Information />
      </div>
    </main>
  );
}

export default memo(Home);
