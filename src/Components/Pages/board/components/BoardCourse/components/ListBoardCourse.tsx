import React from 'react'
import NoImage from "../../../../../../Assets/images/NoImage.png";
import Flower from "../../../../../../Assets/images/flower.jpeg";
import Luxury from "../../../../../../Assets/images/luxury.jpeg";
import Man from "../../../../../../Assets/images/man_1.jpg";
import KaKaoTalk from "../../../../../../Assets/images/kakaotalk.jpg"
export default function ListBoardCourse() {
    const dataBoardCourse = [
        {
            id: 1,
            tilte: "요리초보에게 꿀팁 전수해주시는 선생님 최고예요!",
            subContent: "등록일",
            date: "2024.04.03",
            description: "최근에 결혼을 해서 집밥을 만들어 먹어야하는데 ㅠ0ㅠ 불조절이나 칼질 ...",
            img: null,
            subTitle: "조회",
            rate: 68
        },
        {
            id: 2,
            tilte: "빠지면 아쉬운 수요일 운동!!!",
            subContent: "등록일",
            date: "2024-02-06",
            description: "강사님 너무 좋으시고 함께 운동하는 수요일타임 회원분들도 너무 으쌰으...",
            img: null,
            subTitle: "조회",
            rate: 68
        },
        {
            id: 3,
            tilte: "월요일 몸깨우기로 최고",
            subContent: "등록일",
            date: "2024-02-06",
            description: "강사님 너무 좋으시고 함께 운동하는 수요일타임 회원분들도 너무 으쌰으...",
            img: null,
            subTitle: "조회",
            rate: 67
        },
        {
            id: 4,
            tilte: "빨간모자 인형극 재밋엇어요",
            subContent: "등록일",
            date: "2023-03-21",
            description: "저희 아이들이 맨앞줄에서 봣는데 얌전히 봣나 모르겟네요 9.7.6세인데 너...",
            img: null,
            subTitle: "조회",
            rate: 147
        },
        {
            id: 5,
            tilte: "저희 아이들이 맨앞줄에서 봣는데 얌전히 봣나 모르겟네요 9.7.6세인데 너...",
            subContent: "등록일",
            date: "2023-02-16",
            description: "SNPE라는 새로운 운동을 알고, 경험해볼 수 있어서 좋습니다 SNPE 기구들...",
            img: NoImage,
            subTitle: "조회",
            rate: 307
        },
        {
            id: 6,
            tilte: "최고의 호두정과",
            subContent: "등록일",
            date: "2022-12-26",
            description: "신협 문화센터 수강중 최고지 싶습니다 수업시간 전달력은 말할것도 없...",
            img: null,
            subTitle: "조회",
            rate: 196
        },
        {
            id: 7,
            tilte: "와 쿠킹클래스 클라스 실화인가요?",
            subContent: "등록일",
            date: "2022-12-04",
            description: "강의도 좋았지만 수업 환경에 진짜 놀랐습니다.. 진짜 교실이 너무너무 ...",
            img: NoImage,
            subTitle: "조회",
            rate: 261
        },
        {
            id: 8,
            tilte: "유익하고 뿌듯한 강의였습니다!",
            subContent: "등록일",
            date: "2022-12-04",
            description: "꽃 관리하는 방법, 꽃 정리, 꽂는 방법(?) 속성으로 빠르게 배울 수 있어 ...",
            img: Flower,
            subTitle: "조회",
            rate: 162
        },
        {
            id: 9,
            tilte: "예쁜 주얼리 득템!!",
            subContent: "등록일",
            date: "2022-12-04",
            description: "비즈들이 너무 작아 꿰는게 조금 힘들긴했지만 ㅎㅎ 만들고나니 뿌듯뿌.",
            img: Luxury,
            subTitle: "조회",
            rate: 159
        },
        {
            id: 10,
            tilte: "너무 재미있고 유익한 수업이었어요 !",
            subContent: "등록일",
            date: "2022-11-03",
            description: "강사님이 너무 재미있고 알아듣기 쉽게 설명을 잘 해주셔서 수업 만족...",
            img: Man,
            subTitle: "조회",
            rate: 190
        },
        {
            id: 11,
            tilte: "첫 필라테스~ 재밌는 수업시간!♥",
            subContent: "등록일",
            date: "2022-11-03",
            description: "이번에 신목신협에서 문화센터를 오픈하여 관심을 갖고 필라테스 수업을 ...",
            img: KaKaoTalk,
            subTitle: "조회",
            rate: 377
        },
        {
            id: 12,
            tilte: "유익한 주말~♡",
            subContent: "등록일",
            date: "2022-10-29",
            description: "유익한 강좌였어요~^ 좋은재료와 예쁜 소포장까지 준비해 주셔서 감사...",
            img: null,
            subTitle: "조회",
            rate: 143
        }
    ];


    return (
        dataBoardCourse.map((item: any) => (
            <div key={item.id} className='list_board_container'>
                <div className='img_board_course'>
                    {item?.img && <img className='img_course' src={item?.img} alt={`img-${item?.id}`} />}
                </div>
                <div className={`${item?.id === 5 ? 'board_course_1' : 'board_course_content'}`}>
                    <span className='board_course_tilte'>{item?.tilte}</span>
                    <div className='board_course_sub_date'>
                        <span className='board_course_subTilte'>{item?.subContent}</span>
                        <span className='board_course_date'>{item?.date}</span>
                    </div>
                    <span className='board_course_description'>{item?.description}</span>
                    <div className='board_course_sub_res'>
                        <span className='board_course_subTilte'>{item?.subTitle}</span>
                        <span className='board_course_rate'>{item?.rate}</span>
                    </div>
                </div>
                <div className='board_course_sub'>
                    <span className='board_course_subTilte'>{item?.subTitle}</span>
                    <span className='board_course_rate'>{item?.rate}</span>
                </div>
            </div>
        ))
    )
}
