export type MenuItemType = {
  name: string;
  path: string;
  childrens?: MenuItemType[];
};

const MenuItem: MenuItemType[] = [
  {
    name: "수강신청",
    path: "/lecture/find",
    childrens: [
      {
        name: "강좌검색",
        path: "/lecture/find",
      },
      {
        name: "수강신청안내",
        path: "/lecture/register-info",
      },
      {
        name: "강의스케쥴",
        path: "/lecture/schedule",
      },
      {
        name: "맞춤강좌",
        path: "/lecture/custom",
      },
    ],
  },
  {
    name: "커뮤니티",
    path: "/board/notifi",
    childrens: [
      { name: "공지사항", path: "/board/notifi" },
      { name: "수강후기", path: "/board/course" },
      { name: "갤러리", path: "/board/exhibition" },
    ],
  },
  {
    name: "이용안내",
    path: "/information/credit",
    childrens: [
      { name: "신목신협 문화센터", path: "/information/credit" },
      { name: "Q&A", path: "/board/qa" },
      { name: "강사지원", path: "/information" },
      { name: "오시는길", path: "/information/map" },
    ],
  },
  {
    name: "마이페이지",
    path: "/mypage/profile",
    childrens: [
      { name: "회원정보", path: "/mypage/profile" },
      { name: "수강내역", path: "/mypage/course" },
      { name: "나의수강후기", path: "/mypage/payment" },
      { name: "결제내역", path: "/mypage/course-review" },
    ],
  },
];

export { MenuItem };
