import { RoutesString } from "../Components/Modules/routesString";
import PageErr from "../Components/Pages/404/PageErr";
import Home from "../Components/Pages/Home";
import LectureSearch from "../Components/Pages/Lecture/LectureSearch";
import LectureCustom from "../Components/Pages/Lecture/LectureCustom";
import LectureInfo from "../Components/Pages/Lecture/LectureInfo";
import LectureSchedule from "../Components/Pages/Lecture/LectureShedule";
import Board from "../Components/Pages/board";

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
  {
    path: RoutesString.LectureInfo,
    component: LectureInfo,
    exact: true,
  },
  {
    path: RoutesString.LectureSchedule,
    component: LectureSchedule,
    exact: true,
  },
  {
    path: RoutesString.LectureCustom,
    component: LectureCustom,
    exact: true,
  },
  {
    path: RoutesString.Board,
    component: Board,
    exact: true,
  },
];

export default pages;
