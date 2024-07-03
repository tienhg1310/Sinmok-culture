import React from 'react'
import Board from '../..'
import Slider from '../../../../Common/Slider';
import '../BoardCourse/BoardCourse.scss';
import IconCheck from '../../../../../Assets/images/icons/IconCheck';
import Search from '../Search';
import SliderBoardCourse from './components/SliderBoardCourse';
import ListBoardCourse from './components/ListBoardCourse';
import Panigation from '../../../../Common/Panigation/Panigation';

export default function BoardCourse() {
    const options = ["전체"]
    const [selectedDropdown, setSelectedDropdown] = React.useState("")
    const [selectedOption, setSelectedOption] = React.useState(options[0])

    return (
        <Board >
            <div className="board_course_container">
                <div className="board_wrapper">
                    <Slider
                        pagination={{ clickable: true }}
                        navigation={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        draggable={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {SliderBoardCourse()}
                        <button className='swipper_btn'>
                            <a href="/2">
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
                    options={options}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    selectedDropdown={selectedDropdown}
                    setSelectedDropdown={setSelectedDropdown}
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
