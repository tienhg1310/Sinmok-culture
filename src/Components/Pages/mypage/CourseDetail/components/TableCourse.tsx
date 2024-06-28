import React from 'react'
import { Link } from 'react-router-dom'

function TableCourse() {
    return (
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
                            <Link to="#" >
                                <span className="">1</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-02">
                        <div className="d_num">
                            <Link to="#">
                                <span className="">2</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-03">
                        <div className="d_num">
                            <Link to="#" className="sat" >
                                <span className="">3</span>
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td id="1970-01-04">
                        <div className="d_num">
                            <Link to="#" className="sun" >
                                <span className="">4</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-05">
                        <div className="d_num">
                            <Link to="#" >
                                <span className="">5</span></Link></div></td><td id="1970-01-06">
                        <div className="d_num">
                            <Link to="#">
                                <span >6</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-07">
                        <div className="d_num">
                            <Link to="#" >
                                <span >7</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-08">
                        <div className="d_num"><Link to="#">
                            <span >8</span>
                        </Link>
                        </div>
                    </td>
                    <td id="1970-01-09"><div className="d_num"><Link to="#">
                        <span >9</span>
                    </Link>
                    </div>
                    </td>
                    <td id="1970-01-10">
                        <div className="d_num">
                            <Link to="#" className="sat">
                                <span >10</span>
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td id="1970-01-11">
                        <div className="d_num">
                            <Link to="#" className="sun" >
                                <span >11</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-12"><div className="d_num">
                        <Link to="#" >
                            <span >12</span>
                        </Link>
                    </div>
                    </td>
                    <td id="1970-01-13"><div className="d_num"><Link to="#">
                        <span >13</span></Link>
                    </div>
                    </td>
                    <td id="1970-01-14"><div className="d_num"><Link to="#" >
                        <span >14</span>
                    </Link>
                    </div>
                    </td>
                    <td id="1970-01-15"><div className="d_num"><Link to="#" >
                        <span >15</span></Link></div></td><td id="1970-01-16">
                        <div className="d_num"><Link to="#" >
                            <span >16</span>
                        </Link>
                        </div>
                    </td>
                    <td id="1970-01-17"><div className="d_num"><Link to="#" className="sat">
                        <span >17</span>
                    </Link>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td id="1970-01-18">
                        <div className="d_num"><Link to="#" className="sun" >
                            <span >18</span>
                        </Link>
                        </div>
                    </td>
                    <td id="1970-01-19">
                        <div className="d_num">
                            <Link to="#">
                                <span >19</span>
                            </Link>
                        </div></td><td id="1970-01-20"><div className="d_num"><Link to="#">
                            <span >20</span>
                        </Link>
                        </div>
                    </td>
                    <td id="1970-01-21"><div className="d_num"><Link to="#" >
                        <span >21</span>
                    </Link>
                    </div>
                    </td>
                    <td id="1970-01-22">
                        <div className="d_num">
                            <Link to="#" >
                                <span >22</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-23">
                        <div className="d_num">
                            <Link to="#">
                                <span >23</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-24">
                        <div className="d_num">
                            <Link to="#" className="sat">
                                <span >24</span>
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td id="1970-01-25">
                        <div className="d_num">
                            <Link to="#" className="sun">
                                <span >25</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-26">
                        <div className="d_num">
                            <Link to="#">
                                <span >26</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-27">
                        <div className="d_num">
                            <Link to="#" >
                                <span >27</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-28">
                        <div className="d_num">
                            <Link to="#" >
                                <span >28</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-29">
                        <div className="d_num">
                            <Link to="#" >
                                <span >29</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-30">
                        <div className="d_num">
                            <Link to="#" >
                                <span >30</span>
                            </Link>
                        </div>
                    </td>
                    <td id="1970-01-31">
                        <div className="d_num">
                            <Link to="#" className="sat" >
                                <span >31</span>
                            </Link>
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
    )
}

export default TableCourse