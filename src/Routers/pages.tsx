import path from "path";
import { RoutesString } from "../Components/Modules/routesString";
import PageErr from "../Components/Pages/404/PageErr";
import Home from "../Components/Pages/Home";
import LectureSearch from "../Components/Pages/Lecture";

const pages = [
  {
    path: RoutesString.PageNotFound,
    component: PageErr,
    exact: true,
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: Home,
    exact: true,
  },
  // lecture pages
  {
    path: RoutesString.Lecture,
    component: LectureSearch,
    exact: true,
  },
  {
    path: RoutesString.LectureSearch,
    component: LectureSearch,
    exact: true,
  },
  // {
  //   path: RoutesString.LectureInfo,
  //   component: Lecture,
  //   exact: true,
  // },
  // {
  //   path: RoutesString.LectureSchedule,
  //   component: Lecture,
  //   exact: true,
  // },
  // {
  //   path: RoutesString.LectureCustom,
  //   component: Lecture,
  //   exact: true,
  // },
];

export default pages;
