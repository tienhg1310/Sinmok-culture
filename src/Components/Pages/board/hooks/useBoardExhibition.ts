import { useState } from "react";
import exhibition1 from "../../../../Assets/images/exhibition_1.jpg";
import exhibition2 from "../../../../Assets/images/exhibition_2.jpg";
import exhibition3 from "../../../../Assets/images/exhibiton_3.jpg";
import exhibition4 from "../../../../Assets/images/exhibition_4.jpg";
import exhibition5 from "../../../../Assets/images/exhibition_5.jpg";
import exhibition6 from "../../../../Assets/images/exhibition_6.png";
import exhibition7 from "../../../../Assets/images/exhibition_7.jpg";
import exhibition8 from "../../../../Assets/images/exhibition_8.jpg";
import exhibition9 from "../../../../Assets/images/exhibition_9.jpg";
import exhibition10 from "../../../../Assets/images/exhibiton_10.jpg";
import exhibition11 from "../../../../Assets/images/exhibiton_11.jpg";
import exhibition12 from "../../../../Assets/images/exhibition_12.jpg";
import exhibition13 from "../../../../Assets/images/exhibition_13.jpg";
import exhibition14 from "../../../../Assets/images/exhibition_14.jpg";
import exhibition15 from "../../../../Assets/images/exhibition_15.jpg";
import exhibition16 from "../../../../Assets/images/exhibition_16.jpg";
import exhibition17 from "../../../../Assets/images/exhibition_17.jpg";
import exhibition18 from "../../../../Assets/images/exhibition_18.jpg";
import exhibition19 from "../../../../Assets/images/exhibition_19.jpg";
const useBoardExhibition = () => {
    const exhibitionData = [
        {
            id: 1,
            tilte: "원데이 베이킹 레몬 머랭 타르트",
            description: "등록일 2023-06-19",
            img: exhibition1,
        },
        {
            id: 2,
            tilte: "신목신협 어부바 멘토링",
            description: "등록일 2023-06-19",
            img: exhibition2,
        },
        {
            id: 3,
            tilte: "2/20 물레, 핸드빌딩 원데이클래스",
            description: "등록일 2023-02-20",
            img: exhibition3,
        },
        {
            id: 4,
            tilte: "명사특강 김창옥 부부, 자녀 그리고 나와의 소통방법",
            description: "등록일 2023-01-31",
            img: exhibition4,
        },
        {
            id: 5,
            tilte: "색이 변하는 과학 MAGIC 팡팡",
            description: "등록일 2023-01-16",
            img: exhibition5,
        },
        {
            id: 6,
            tilte: "신목신협 문화센터 더 필라테스 강사진 소개",
            description: "등록일 2023-01-13",
            img: exhibition6,
        },
        {
            id: 7,
            tilte: "더 필라테스 1:5 그룹 필라테스",
            description: "등록일 2023-01-13",
            img: exhibition7,
        },
        {
            id: 8,
            tilte: "김양숙의 파워풀 노래교실",
            description: "등록일 2023-01-13",
            img: exhibition8,
        },
        {
            id: 9,
            tilte: "박미경의 신바람 노래교실",
            description: "등록일 2023-01-13",
            img: exhibition9,
        },
        {
            id: 10,
            tilte: "윤혜란의 돌아온 노래교실",
            description: "등록일 2023-01-13",
            img: exhibition10,
        },
        {
            id: 11,
            tilte: "디폼 블록 팽수 or 엘사",
            description: "등록일 2023-01-13",
            img: exhibition11,
        },
        {
            id: 12,
            tilte: "목요 베이킹 딸기 타르트",
            description: "등록일 2023-01-13",
            img: exhibition12,
        },
        {
            id: 13,
            tilte: "목요일 밤 시간 어때요? 생활술공방 화술과 전통주 하이볼 만들기",
            description: "등록일 2023-01-13",
            img: exhibition13,
        },
        {
            id: 14,
            tilte: "1/7 똥돼지 왕방귀 인형극",
            description: "등록일 2023-01-07",
            img: exhibition14,
        },
        {
            id: 15,
            tilte: "크리스마스 캔들 하우스",
            description: "등록일 2022-12-27",
            img: exhibition15,
        },
        {
            id: 16,
            tilte: "신목신협 뮤직 클래스",
            description: "등록일 2022-11-25",
            img: exhibition16,
        },
        {
            id: 17,
            tilte: "베이킹 원데이 사과 갈레트",
            description: "등록일 2022-11-25",
            img: exhibition17,
        },
        {
            id: 18,
            tilte: "국민간식 오란다 만들기",
            description: "등록일 2022-11-21",
            img: exhibition18,
        },
        {
            id: 19,
            tilte: "겨울학기 회원모집",
            description: "등록일 2022-11-10",
            img: exhibition19,
        }
    ];

    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [totalItem, setTotalItem] = useState<number>(0);

    return {
        page,
        setPage,
        perPage,
        setPerPage,
        totalPage,
        setTotalPage,
        totalItem,
        setTotalItem,
        exhibitionData
    }
}
export default useBoardExhibition;