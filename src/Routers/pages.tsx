import { Suspense, lazy } from "react";
import { RoutesString } from "../Components/Modules/routesString";
const PageErr = () => import("../Components/Pages/404/PageErr");
const Home = () => import("../Components/Pages/Home");
const LectureSearch = () => import("../Components/Pages/Lecture/LectureSearch");
const LectureCustom = () => import("../Components/Pages/Lecture/LectureCustom");
const LectureInfo = () => import("../Components/Pages/Lecture/LectureInfo");
const Board = () => import("../Components/Pages/board/components/BoardNotif");
const BoardCourse = () => import("../Components/Pages/board/components/BoardCourse");
const BoardExhibition = () => import("../Components/Pages/board/components/BoardExhibition");
const LectureSchedule = () =>
  import("../Components/Pages/Lecture/LectureShedule");

const lazyLoad = (importFunc: any) => {
  const Component = lazy(importFunc);
  return (props: any) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};



const pages = [
  {
    path: RoutesString.PageNotFound,
    component: lazyLoad(PageErr),
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: lazyLoad(Home),
  },
  // lecture pages
  {
    path: RoutesString.Lecture,
    component: lazyLoad(LectureSearch),
  },
  {
    path: RoutesString.LectureSearch,
    component: lazyLoad(LectureSearch),
  },
  {
    path: RoutesString.LectureInfo,
    component: lazyLoad(LectureInfo),
  },
  {
    path: RoutesString.LectureSchedule,
    component: lazyLoad(LectureSchedule),
  },
  {
    path: RoutesString.LectureCustom,
    component: lazyLoad(LectureCustom),
  },

  //board
  {
    path: RoutesString.BoardNotifi,
    component: lazyLoad(Board),
  },
  {
    path: RoutesString.BoardCourse,
    component: lazyLoad(BoardCourse),
  },
  {
    path: RoutesString.BoardExhibition,
    component: lazyLoad(BoardExhibition),
  },
];

export default pages;
