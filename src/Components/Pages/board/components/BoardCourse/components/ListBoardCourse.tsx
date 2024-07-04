import React from 'react'
import fakeDb from "../../../../../../db.json";

type ListBoardCourseProps = {
    handleDetail: any
}
export default function ListBoardCourse(props: ListBoardCourseProps) {
    const { handleDetail } = props || {};

    const dataBoardCourse = fakeDb.dataBoardCourse;

    return (
        dataBoardCourse.map((item: any) => (
            <div key={item.id} className='list_board_container'>
                <div className='img_board_course'>
                    {item?.img && <img className='img_course' src={item?.img} alt={`img-${item?.id}`} />}
                </div>
                <div className={`board_course_content`}>
                    <span onClick={() => handleDetail(item)} className='board_course_tilte'>{item?.tilte}</span>
                    <div className='board_course_sub_date'>
                        <span className='board_course_subTilte'>{item?.subContent}</span>
                        <span className='board_course_date'>{item?.date}</span>
                    </div>
                    <span className='board_course_description'>{item?.description && `${item.description[0].substring(0, 33)}...`}</span>
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
