import "./RegisterInfoBenefit.scss";
import { IoIosAlert } from "react-icons/io";
import saleIcon from "../../../Assets/images/icons/sale_ico.png";
import priceIcon from "../../../Assets/images/icons/price_ico.png";

type Props = {};

const RegisterInfoBenefit = (props: Props) => {
  return (
    <div className="registerInfoBenefit__container">
      <div className="registerInfo__benefit-text">
        <div className="benefit-title">
          <p>조합원 혜택</p>
        </div>
        <div className="benefit-desc">
          <IoIosAlert size={20} className="icon" />
          <p>
            모든 할인 혜택은 정규강좌에 한하여 조합원 본인 또는 가족만
            가능합니다.
          </p>
        </div>
      </div>
      <div className="regiterInfo__benefit-area">
        <div className="benefit-discount border">
          <div className="discount-image">
            <img src={saleIcon} alt="" />
          </div>
          <div className="discount-text">
            <p className="title">수강료의 5%할인</p>
            <p className="desc">
              정규강좌 수강 시 신목신협 조합원은 수강료의 5% 할인 받으실 수
              있습니다.
            </p>
          </div>
        </div>
        <div className="benefit-price">
          <div className="price-image">
            <img src={priceIcon} alt="" />
          </div>
          <div className="price-text">
            <p className="title">수강료의 5%할인</p>
            <p className="desc">
              정규강좌 수강 시 신목신협 조합원은 수강료의 5% 할인 받으실 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInfoBenefit;
