import { Suspense, lazy } from "react";
import { RoutesString } from "../Components/Modules/routesString";
const PageErr = () => import("../Components/Pages/404/PageErr");
const Home = () => import("../Components/Pages/Home");
const LectureSearch = () => import("../Components/Pages/Lecture/LectureSearch");
const LectureCustom = () => import("../Components/Pages/Lecture/LectureCustom");
const LectureInfo = () => import("../Components/Pages/Lecture/LectureInfo");
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

import Board from "../Components/Pages/board";

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
  {
    path: RoutesString.Board,
    component: Board,
    exact: true,
  },
];

export default pages;
