import React from 'react'
import Buff from '../../../../../../Assets/images/buff.jpg';
import fit from '../../../../../../Assets/images/fit.png';
import food from '../../../../../../Assets/images/food.jpg';
import ves from '../../../../../../Assets/images/ves.jpg';
import snack from '../../../../../../Assets/images/snack.jpg';
import yoga from '../../../../../../Assets/images/yoga.jpg';
import man from '../../../../../../Assets/images/man.jpg';
import gym from '../../../../../../Assets/images/gym.png';
import flo from '../../../../../../Assets/images/flo.png';
import SelectIcon from "../../../../../../Assets/images/select_icn04.png";
import { SwiperSlide } from 'swiper/react';
import IconRate from '../../../../../../Assets/images/icons/IconRate';
export default function SliderBoardCourse() {

    const slides = [
        {
            id: 1,
            img: food,
            title: "4/2 봉골레 국물 파스타 (with 하드롤)",
            subContent: "요리초보에게 꿀팁 전수해주시는 선생님 최고예요!",
            titleContent: "김○희",
            date: "2024.04.03",
            rating: 4
        },
        {
            id: 2,
            img: yoga,
            title: "소도구 매트 필라테스 10:00~10:50 (수)",
            subContent: "월요일 몸깨우기로 최고",
            titleContent: "김○희",
            date: "2024.02.06",
            rating: 4
        },
        {
            id: 3,
            img: yoga,
            title: "소도구 매트 필라테스 10:00~10:50 (월)",
            subContent: "월요일 몸깨우기로 최고",
            titleContent: "김○희",
            date: "2024.02.06",
            rating: 4
        },
        {
            id: 4,
            img: Buff,
            title: "2/25 어린이 인형극 신비한 빨간모자",
            subContent: "빨간모자 인형극 재밋엇어요",
            titleContent: "김○은",
            date: "2023.03.21",
            rating: 4
        },
        {
            id: 5,
            img: fit,
            title: "퇴근 후 피로회복 SNPE",
            subContent: "바른 자세의 힘을 길러주는 SNPE 수업 좋습니다",
            titleContent: "최○은",
            date: "2023.02.16",
            rating: 4
        },
        {
            id: 6,
            img: null,
            title: "12/24 호두정과 신년 선물세트",
            subContent: "최고의 호두정과",
            titleContent: "천○순",
            date: "2023.02.16",
            rating: 4
        },
        {
            id: 7,
            img: ves,
            title: "10/22 트리플 넛츠 타르트",
            subContent: "와 쿠킹클래스 클라스 실화인가요?",
            titleContent: "김○진",
            date: "2022.12.04",
            rating: 4
        },
        {
            id: 8,
            img: flo,
            title: "12/3 플라워 박스",
            subContent: "유익하고 뿌듯한 강의였습니다!",
            titleContent: "김○진",
            date: "2022.12.04",
            rating: 4
        },
        {
            id: 9,
            img: null,
            title: "11/30 천연 원석 주얼리 아이템",
            subContent: "예쁜 주얼리 득템!!",
            titleContent: "김○진",
            date: "2022.12.04",
            rating: 4
        },
        {
            id: 10,
            img: man,
            title: "10/18 맥주도 취향이 있다, 나의 맥주를 찾아서",
            subContent: "너무 재미있고 유익한 수업이었어요 !",
            titleContent: "백○선",
            date: "2022.11.03",
            rating: 4
        },
        {
            id: 11,
            img: gym,
            title: "1:5 기구 필라테스 체어&바렐 (화 18:00~18:50)",
            subContent: "첫 필라테스~ 재밌는 수업시간!♥",
            titleContent: "최○은",
            date: "2022.11.03",
            rating: 4
        },
        {
            id: 12,
            img: snack,
            title: "10/29(토) 수제 그래놀라",
            subContent: "유익한 주말~♡",
            titleContent: "김○자",
            date: "2022.10.29",
            rating: 4
        },
    ];

    return (
        slides.map((item: any, index: number) => {
            return <SwiperSlide key={item?.id}>
                <div className={`swipper_container `}>
                    <div className="left">
                        <div className='best'>
                            <img src={SelectIcon} alt="select" />
                        </div>
                        <div className='swipper_content_1'>
                            {item?.img !== null ? <img className={`swipper_img`} src={item?.img} alt={item?.title} /> : <div className="swipper_img_1" />}
                        </div>
                    </div>
                    <div className='swipper_content_2'>
                        <a href="#" className='swipper_title'>{item?.title}</a>
                        <a href="#" className='swipper_subContent'>{item?.subContent}</a>
                        <div className='swipper_titleContent'>
                            <span className='swipper_child_content'>{item?.titleContent}</span>
                            <span >{item?.date}</span>
                        </div>
                        <div className="swipper_rating">
                            {Array.from({ length: Math.round(item?.rating) }, (_, index) => (
                                <IconRate key={index} style={{ marginRight: 10 }} />
                            ))}
                        </div>
                    </div>
                </div>
            </SwiperSlide>;
        })
    )
}
