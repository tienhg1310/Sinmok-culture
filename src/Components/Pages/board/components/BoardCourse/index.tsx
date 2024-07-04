import React, { useCallback, useEffect, useState } from 'react'
import Board from '../..'
import Slider from '../../../../Common/Slider';
import '../BoardCourse/BoardCourse.scss';
import IconCheck from '../../../../../Assets/images/icons/IconCheck';
import Search from '../Search';
import SliderBoardCourse from './components/SliderBoardCourse';
import ListBoardCourse from './components/ListBoardCourse';
import Panigation from '../../../../Common/Panigation/Panigation';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import BoardDetail from '../BoardDetail';

export default function BoardCourse() {
    const options = ["전체"];
    const [selectedDropdown, setSelectedDropdown] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState(options[0]);
    const [boardData, setBoardData] = useState(null);
    const [hasId, setHasId] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleDetail = useCallback((data: any) => {
        navigate(`/board/course?id=${data?.id}`);
        setBoardData(data);
        localStorage.setItem('boardData', JSON.stringify(data));
    }, [navigate]);

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            setHasId(true);
        } else {
            setHasId(false);
            localStorage.removeItem('boardData');
        }
    }, [searchParams]);

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
            {hasId ? (
                <div className="board_search_container">
                    <BoardDetail boardData={boardData} />
                </div>
            ) : (
                <>
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
                        {ListBoardCourse({ handleDetail: handleDetail })}
                    </div>
                    <Panigation
                        totalPage={1}
                        page={1}
                        setPage={() => { }}
                        perPage={20}
                        setPerPage={() => { }}
                        totalItem={20}
                    />
                </>
            )}
        </Board>
    )
}
