import React from 'react'

function MyInfo() {
    return (
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
    )
}

export default MyInfo