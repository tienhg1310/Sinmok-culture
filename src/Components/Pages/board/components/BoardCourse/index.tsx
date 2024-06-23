import React, { useCallback } from 'react'
import Board from '../..'
import Slider from '../../../../Common/Slider'


import { SwiperSlide } from 'swiper/react';
import '../BoardCourse/BoardCourse.scss';
import IconRate from '../../../../../Assets/images/icons/IconRate';
import IconCheck from '../../../../../Assets/images/icons/IconCheck';
import { SwiperOptions } from 'swiper';
import Search from '../Search';
import SliderBoardCourse from './components/SliderBoardCourse';
import ListBoardCourse from './components/ListBoardCourse';
import Panigation from '../../../../Common/Panigation/Panigation';
// IconRate
export default function BoardCourse() {

    return (
        <Board >
            <div className="board_course_container">
                <div className="board_wrapper">
                    <Slider
                        pagination={{ clickable: true }}
                        navigation={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        draggable={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {SliderBoardCourse()}
                        <button className='swipper_btn'>
                            <a href="">
                                나의 수강후기 작성
                                <span>
                                    <IconCheck />
                                </span>
                            </a>
                        </button>
                    </Slider>

                </div>
            </div>
            <div className="board_search_container">
                <Search
                    title='전체 12건'
                    options={["전체"]}
                    selectedOption={"전체"}
                    setSelectedOption={() => { }}
                    selectedDropdown={"전체"}
                    setSelectedDropdown={() => { }}
                />
            </div>
            <div className='board_course_list'>
                {ListBoardCourse()}
            </div>
            <Panigation
                totalPage={1}
                page={1}
                setPage={() => { }}
                perPage={20}
                setPerPage={() => { }}
                totalItem={20}
            />
        </Board>
    )
}
