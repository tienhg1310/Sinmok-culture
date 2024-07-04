import { Suspense, lazy } from "react";
import { RoutesString } from "../Components/Modules/routesString";
const PageErr = () => import("../Components/Pages/404/PageErr");
const Home = () => import("../Components/Pages/Home");
const LoginPage = () => import("../Components/Pages/Auth/Login");
const RegisterPage = () => import("../Components/Pages/Auth/Register");
const LectureSearch = () => import("../Components/Pages/Lecture/LectureSearch");
const LectureCustom = () => import("../Components/Pages/Lecture/LectureCustom");
const LectureSchedule = () => import("../Components/Pages/Lecture/LectureShedule");
const LectureRegisterInfo = () => import("../Components/Pages/Lecture/LectureRegisterInfo");
const InformationCredit = () => import("../Components/Pages/Information/InformationCredit");
const InformationQA = () => import("../Components/Pages/Information/Q&A");
const InformationMap = () => import("../Components/Pages/Information/InformationMap");
const Information = () => import("../Components/Pages/Information/Information");
const Board = () => import("../Components/Pages/board/components/BoardNotif");
const BoardCourse = () => import("../Components/Pages/board/components/BoardCourse");
const BoardExhibition = () => import("../Components/Pages/board/components/BoardExhibition");
const Profile = () => import("../Components/Pages/mypage/Profile");
const CourseDetail = () => import("../Components/Pages/mypage/CourseDetail");
const PaymentDetail = () => import("../Components/Pages/mypage/PaymentDetail");
const MyCourseReview = () => import("../Components/Pages/mypage/MyCourseReview");
const CartPage = () => import("../Components/Pages/Cart");
const BoardDetails = () => import("../Components/Pages/board/components/BoardDetail");
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
  /* authentication page */
  {
    path: RoutesString.Login,
    component: lazyLoad(LoginPage),
  },
  {
    path: RoutesString.Register,
    component: lazyLoad(RegisterPage),
  },

  /* cart page */
  {
    path: RoutesString.Cart,
    component: lazyLoad(CartPage),
  },
  /* lecture pages */
  {
    path: RoutesString.Lecture,
    component: lazyLoad(LectureSearch),
  },
  {
    path: RoutesString.LectureSearch,
    component: lazyLoad(LectureSearch),
  },

  {
    path: RoutesString.LectureRegisterInfo,
    component: lazyLoad(LectureRegisterInfo),
  },
  {
    path: RoutesString.LectureSchedule,
    component: lazyLoad(LectureSchedule),
  },
  {
    path: RoutesString.LectureCustom,
    component: lazyLoad(LectureCustom),
    auth: true,
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
  {
    path: RoutesString.BoarDetails,
    component: lazyLoad(BoardDetails),
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

  //mypage
  {
    path: RoutesString.Profile,
    component: lazyLoad(Profile),
    auth: true,
  },
  {
    path: RoutesString.CourseDetail,
    component: lazyLoad(CourseDetail),
    auth: true
  },
  {
    path: RoutesString.PaymentDetail,
    component: lazyLoad(PaymentDetail),
    auth: true
  },
  {
    path: RoutesString.MyCourseReview,
    component: lazyLoad(MyCourseReview),
    auth: true
  },
];

export default pages;
