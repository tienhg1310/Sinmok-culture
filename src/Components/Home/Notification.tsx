import { useRef, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdPause,
  IoMdPlay,
} from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import iconNoti from "../../Assets/images/icons/actions/icon_notice.jpg";
import "./Notification.scss";

type Props = {};

const Notification = (props: Props) => {
  const [isPause, setIsPause] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="notification__container">
      <div className="notification__header">
        <div className="header-img">
          <img src={iconNoti} alt="" />
        </div>
        <h2 className="header-text">공지사항</h2>
      </div>
      <div className="notifiaction__content">
        <Swiper
          modules={[Navigation, Pagination, Navigation, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          direction="vertical"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          loop={true}
          autoplay={
            !isPause
              ? {
                delay: 5000,
                pauseOnMouseEnter: true,
              }
              : false
          }
        >
          <SwiperSlide>★문화센터 설 연휴 휴관 안내★</SwiperSlide>
          <SwiperSlide>
            [신목신협 문화센터] 2024 년봄 학기 접수 시작
          </SwiperSlide>
          <SwiperSlide>2023 추석 연휴 휴관안내</SwiperSlide>
        </Swiper>
      </div>
      <div className="notifiaction__action">
        <button className="up" ref={navigationPrevRef}>
          <IoIosArrowUp size={20} />
        </button>
        <button className="down" ref={navigationNextRef}>
          <IoIosArrowDown size={20} />
        </button>
        {!isPause ? (
          <button className="pause" onClick={() => setIsPause(true)}>
            <IoMdPause size={20} />
          </button>
        ) : (
          <button className="play" onClick={() => setIsPause(false)}>
            <IoMdPlay size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
