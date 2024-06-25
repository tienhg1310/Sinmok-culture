import React from 'react'
import MyPage from '..'
import "../CourseDetail/styles/course.scss"
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
                            <table className="schcal_tbl">
                                <thead>
                                    <tr>
                                        <th scope="col" className="sun">일</th>
                                        <th scope="col">월</th>
                                        <th scope="col">화</th>
                                        <th scope="col">수</th>
                                        <th scope="col">목</th>
                                        <th scope="col">금</th>
                                        <th scope="col" className="sat">토</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="off"> </td>
                                        <td className="off"> </td>
                                        <td className="off"> </td>
                                        <td className="off"> </td>
                                        <td id="1970-01-01">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span className="">1</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-02">
                                            <div className="d_num">
                                                <a href="#">
                                                    <span className="">2</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-03">
                                            <div className="d_num">
                                                <a href="#" className="sat" >
                                                    <span className="">3</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="1970-01-04">
                                            <div className="d_num">
                                                <a href="#" className="sun" >
                                                    <span className="">4</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-05">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span className="">5</span></a></div></td><td id="1970-01-06">
                                            <div className="d_num">
                                                <a href="#">
                                                    <span >6</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-07">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >7</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-08">
                                            <div className="d_num"><a href="#">
                                                <span >8</span>
                                            </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-09"><div className="d_num"><a href="#">
                                            <span >9</span>
                                        </a>
                                        </div>
                                        </td>
                                        <td id="1970-01-10">
                                            <div className="d_num">
                                                <a href="#" className="sat">
                                                    <span >10</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="1970-01-11">
                                            <div className="d_num">
                                                <a href="#" className="sun" >
                                                    <span >11</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-12"><div className="d_num">
                                            <a href="#" >
                                                <span >12</span>
                                            </a>
                                        </div>
                                        </td>
                                        <td id="1970-01-13"><div className="d_num"><a href="#">
                                            <span >13</span></a>
                                        </div>
                                        </td>
                                        <td id="1970-01-14"><div className="d_num"><a href="#" >
                                            <span >14</span>
                                        </a>
                                        </div>
                                        </td>
                                        <td id="1970-01-15"><div className="d_num"><a href="#" >
                                            <span >15</span></a></div></td><td id="1970-01-16">
                                            <div className="d_num"><a href="#" >
                                                <span >16</span>
                                            </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-17"><div className="d_num"><a href="#" className="sat">
                                            <span >17</span>
                                        </a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="1970-01-18">
                                            <div className="d_num"><a href="#" className="sun" >
                                                <span >18</span>
                                            </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-19">
                                            <div className="d_num">
                                                <a href="#">
                                                    <span >19</span>
                                                </a>
                                            </div></td><td id="1970-01-20"><div className="d_num"><a href="#">
                                                <span >20</span>
                                            </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-21"><div className="d_num"><a href="#" >
                                            <span >21</span>
                                        </a>
                                        </div>
                                        </td>
                                        <td id="1970-01-22">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >22</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-23">
                                            <div className="d_num">
                                                <a href="#">
                                                    <span >23</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-24">
                                            <div className="d_num">
                                                <a href="#" className="sat">
                                                    <span >24</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="1970-01-25">
                                            <div className="d_num">
                                                <a href="#" className="sun">
                                                    <span >25</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-26">
                                            <div className="d_num">
                                                <a href="#">
                                                    <span >26</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-27">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >27</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-28">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >28</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-29">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >29</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-30">
                                            <div className="d_num">
                                                <a href="#" >
                                                    <span >30</span>
                                                </a>
                                            </div>
                                        </td>
                                        <td id="1970-01-31">
                                            <div className="d_num">
                                                <a href="#" className="sat" >
                                                    <span >31</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                        <td className="off">
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody />
                            </table>
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