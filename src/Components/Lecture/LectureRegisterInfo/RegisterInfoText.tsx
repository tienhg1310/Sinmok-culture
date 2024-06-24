import infoImage from "../../../Assets/images/info_img01.png";
import "./RegisterInfoText.scss";

type Props = {};

const RegisterInfoText = (props: Props) => {
  return (
    <div className="registerInfo__text">
      <div className="registerInfo__title">
        <p>
          행복이 시작되는곳! <br /> 신목신협과 함께 하세요.
        </p>
      </div>
      <div className="registerInfo__description">
        <p>누구에게나 열려있는 공간으로 평생학습 배움터를 만들어 나갑니다.</p>
      </div>
      <div className="registerInfo__image">
        <img src={infoImage} alt="" />
      </div>
    </div>
  );
};

export default RegisterInfoText;
