import { FC, useRef } from "react";
import { GoPlus } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { ILecture } from "../../Constants/interface";
import LectureCard from "../Lecture/LectureSearch/LectureCard";
import "./CourseCarousel.scss";

type Props = {
  lectureList: ILecture[];
};

const CourseCarousel: FC<Props> = ({ lectureList }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div className="coureCarousel__container">
        <div className="courseCarousel__tittle">
          <h2 className="tittle-text">강좌안내</h2>
          <div className="tittle-action">
            <GoPlus className="icon" />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          direction="horizontal"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {lectureList &&
            lectureList.map((lecture, lectureIndex) => {
              return (
                <SwiperSlide key={lecture.id}>
                  <LectureCard key={lecture.id} lecture={lecture} />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="courseCarousel-button">
          <button className="button-prev" ref={navigationPrevRef}>
            &#10094;
          </button>
          <button ref={navigationNextRef} className="button-next">
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCarousel;
