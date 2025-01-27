import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
} from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";

type Options = {
  config?: SwiperOptions;
  children?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: {};
  scrollbar?: {};
  draggable?: {};
  autoPlay?: {
    delay?: number;
    disableOnInteraction?: boolean;
  };
  modules?: any[];
  className?: string;
  style?: React.CSSProperties;
  headerStyle?: string;
  cellStyle?: string;
  onSwiper?: (swiper: any) => void;
  onSlideChange?: () => void;
  [key: string]: any;
};
const Slider = (options: Options) => {
  const {
    config,
    children,
    spaceBetween,
    slidesPerView,
    navigation,
    pagination,
    scrollbar,
    draggable,
    className,
    style,
    headerStyle,
    cellStyle,
    onSwiper,
    onSlideChange,
    autoPlay,
    modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    ...rest
  } = options || {};

  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation || true}
      pagination={pagination}
      scrollbar={scrollbar}
      autoplay={autoPlay}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
