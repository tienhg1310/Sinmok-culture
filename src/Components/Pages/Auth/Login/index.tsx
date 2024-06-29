import { CiLock, CiUser } from "react-icons/ci";
import loginIcn1 from "../../../../Assets/images/auth/log_info_icon01.png";
import loginIcn2 from "../../../../Assets/images/auth/log_info_icon02.png";
import Layout from "../Layout";
import "./index.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Modules/store/store";
import { login } from "../../../../Modules/store/slices/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated]);
  return (
    <Layout>
      <div className="login_title">
        <p>로그인</p>
      </div>
      <div className="login_container">
        <div className="login_wrapper">
          <div className="login_text">
            <p className="text-desc">신목신협 문화센터에 오신것을 환영합니다.</p>
            <p className="text-title">
              <span>신목신협 문화센터</span> <br /> 로그인
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input_box">
              <div className="input-field">
                <input type="text" placeholder="아이디  입력" className="text-box" {...register("username")} />
                <CiUser size={20} className="icon" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="비밀번호 입력" className="text-box" {...register("password")} />
                <CiLock size={20} className="icon" />
              </div>
              <div className="input-field">
                <button type="submit">로그인</button>
              </div>
              <div className="input-field flex-row">
                <input type="checkbox" name="" id="" className="check-box" />
                <p>로그인 상태 유지</p>
              </div>
            </div>
          </form>
        </div>
        <div className="login_info">
          <div className="info-field">
            <img src={loginIcn1} alt="" />
            <div>
              <p>아이디 / 비밀번호 찾기</p>
              <p>아이디 및 비밀번호를 잊으셨나요?</p>
            </div>
          </div>
          <div className="info-field">
            <img src={loginIcn2} alt="" />
            <div>
              <p>아이디 / 비밀번호 찾기</p>
              <p>아이디 및 비밀번호를 잊으셨나요?</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LoginPage;
