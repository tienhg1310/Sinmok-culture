import React from 'react'
import MyPage from '..';
import "../Profile/styles/profile.scss";
type Props = {
    [key: string]: any
}
function Profile(props: Props) {
    return (
        <MyPage>
            <div className='container-mypage'>
                <h2 className="name">
                    <span>박정훈</span>
                    <p>님</p>
                </h2>
                <p className="changeDay">최근수정일자 : </p>
                <div className="myinfo">
                    <ul>
                        <li className="icon01">
                            <a href="/Cart/List/">
                                <span className="ico_my icn_29" />
                                <p>장바구니</p>
                                <span className="num">2</span>
                            </a>
                        </li>
                        <li className="icon02">
                            <a href="/kr/html/Mypage/0402.html">
                                <span className="ico_my icn_30" />
                                <p>수강내역</p>
                                <span className="num">0</span>
                            </a>
                        </li>
                        <li className="icon03">
                            <a href="/member/Modify">
                                <span className="ico_my icn_31" />
                                <p>나의 관심분야</p><span className="num">1</span>
                            </a>
                        </li>
                        <li className="icon04">
                            <a href="/kr/html/Mypage/0403.html">
                                <span className="ico_my icn_32" />
                                <p>수강후기</p>
                                <span className="num">0</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <h2 className="title1">회원정보</h2>
                <table className="tableStyle_thleft">
                    <caption>
                        <strong>표테이블</strong>
                        <details><summary>표입니다.</summary></details>
                    </caption>
                    <colgroup>
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '35%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '35%' }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th className="title">등급</th>
                            <td colSpan={3}><span className="label label-rouded label-default">비조합원</span></td>
                        </tr>
                        <tr>
                            <th className="title">성명</th>
                            <td>박정훈</td>
                            <th className="title">생년월일</th>
                            <td>1986.02.24</td>
                        </tr>
                        <tr>
                            <th className="title">휴대전화</th>
                            <td>010-3905-0101</td>
                            <th className="title">e-mail</th>
                            <td>fireking5997@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="title">주소</th>
                            <td colSpan={3}>(우)01080 서울 강북구 수유로23길 2 (수유동)</td>
                        </tr>
                    </tbody>
                </table>
                <a className="btn button_small blue" href="/member/PassCheck?gbn=info">
                    회원정보 수정<span />
                </a>
                <a className="btn button_small black" href="/member/PassCheck?gbn=pass">
                    비밀번호 변경
                    <span></span>
                </a>
                <h2 className="title1">강좌정보 수신동의</h2>
                <div className="agree">
                    <form name="MemberRCVForm" id="MemberRCVForm" action="#" method="post">
                        <div className="check">
                            <span className="bxCheck">
                                <label htmlFor="mailing-yes" className="container">
                                    <input type="checkbox" name="mailing" id="mailing-yes" title="이메일" defaultValue="Y" />E-Mail
                                    <span className="checkmark" />
                                </label>
                            </span>
                            <span className="bxCheck">
                                <label htmlFor="sms-yes" className="container">
                                    <input type="checkbox" name="sms" id="sms-yes" title="sms" defaultValue="Y" />SMS
                                    <span className="checkmark" /></label>
                            </span>
                            <p>수신 동의하시면 다양한 서비스를 제공 받으실 수 있습니다.</p>
                        </div>
                        <a href="#"><span className="tag mg" id="ReceiveSave">저장</span></a>
                    </form>
                </div>

            </div>
        </MyPage>
    )
};

export default Profile;