import React from 'react'
import MyPage from '..'
import "../CourseDetail/styles/course.scss"
import TableCourse from './components/TableCourse'
type Props = {
    [key: string]: any
}
function CourseDetail(props: Props) {
    return (
        <MyPage>
            <div className='lec_history'>
                <div className="semester">
                    <div className="calender">
                        <div className="lec_left">
                            <div className="title_box">
                                <strong>06월</strong>
                                <p>June</p>
                            </div>
                            <TableCourse />
                        </div>
                        <div className="lec_right">
                            <div className="schtxt">
                                <h3>06월 수강내역</h3>
                                <ul className="list_1st">
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </MyPage>
    )
}

export default CourseDetail