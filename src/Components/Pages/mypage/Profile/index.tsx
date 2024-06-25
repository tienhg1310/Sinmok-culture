import React from 'react'
import MyPage from '..';
import "../Profile/styles/profile.scss";
import TableProfile from './components/TableProfile';
import MyInfo from './components/MyInfo';
import Angree from './components/Angree';
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
                <MyInfo />
                <h2 className="title1">회원정보</h2>
                <TableProfile />
                <a className="btn button_small blue" href="/member/PassCheck?gbn=info">
                    회원정보 수정<span />
                </a>
                <a className="btn button_small black" href="/member/PassCheck?gbn=pass">
                    비밀번호 변경
                    <span></span>
                </a>
                <h2 className="title1">강좌정보 수신동의</h2>
                <Angree />
            </div>
        </MyPage>
    )
};

export default Profile;