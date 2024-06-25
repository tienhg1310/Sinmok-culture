import Layout from "../Layout";
import "./index.scss";
import oneSelfIcn from "../../../../Assets/images/auth/oneself_icon01.png";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <div className="register_title">
        <p>로그인</p>
      </div>
      <div className="register_container">
        <div className="login_wrapper">
          <div className="image">
            <img src={oneSelfIcn} alt="" />
          </div>
          <div className="text-box">
            <div className="text-title">
              <p>휴대폰 인증</p>
            </div>
            <div className="text-desc">
              <p>
                수강등록신청 및 수강 조회, 수정 등의 서비스를 이용하시려면
                본인확인을 위한 인증이 반드시 필요합니다.
                <br />
                아래의 버튼을 클릭해 본인인증을 진행해 주세요.
              </p>
            </div>
            <div className="action">
              <button>휴대폰 인증받기</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
