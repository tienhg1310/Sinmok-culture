import { Suspense, lazy } from "react";
import { RoutesString } from "../Components/Modules/routesString";
const PageErr = () => import("../Components/Pages/404/PageErr");
const Home = () => import("../Components/Pages/Home");
const LectureSearch = () => import("../Components/Pages/Lecture/LectureSearch");
const LectureCustom = () => import("../Components/Pages/Lecture/LectureCustom");
const LectureInfo = () => import("../Components/Pages/Lecture/LectureInfo");
const InformationCredit = () => import("../Components/Pages/Information/InformationCredit")
const InformationQA = () => import("../Components/Pages/Information/Q&A");
const InformationMap = () => import("../Components/Pages/Information/InformationMap");
const Information = () => import("../Components/Pages/Information/Information");
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

  //Information
  {
    path: RoutesString.InformationCredit,
    component: lazyLoad(InformationCredit),
  },
  {
    path: RoutesString.InformationQA,
    component: lazyLoad(InformationQA),
  },
  {
    path: RoutesString.Information,
    component: lazyLoad(Information),
  },
  {
    path: RoutesString.InformationMap,
    component: lazyLoad(InformationMap),
  },
];

export default pages;
