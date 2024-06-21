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
    path: "board/notice",
    childrens: [
      { name: "공지사항", path: "board/notice" },
      { name: "수강후기", path: "" },
      { name: "갤러리", path: "" },
    ],
  },
  {
    name: "이용안내",
    path: "",
    childrens: [
      { name: "신목신협 문화센터", path: "" },
      { name: "Q&A", path: "" },
      { name: "강사지원", path: "" },
      { name: "오시는길", path: "" },
    ],
  },
  {
    name: "마이페이지",
    path: "",
    childrens: [
      { name: "회원정보", path: "" },
      { name: "수강내역", path: "" },
      { name: "나의수강후기", path: "" },
      { name: "결제내역", path: "" },
    ],
  },
];

export { MenuItem };
