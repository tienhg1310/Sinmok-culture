import "./Action.scss";
import actionIcn1 from "../../Assets/images/icons/actions/icon_c1.png";
import actionIcn2 from "../../Assets/images/icons/actions/icon_c2.png";
import actionIcn3 from "../../Assets/images/icons/actions/icon_c3.png";
import actionIcn4 from "../../Assets/images/icons/actions/icon_c4.png";
import actionIcn5 from "../../Assets/images/icons/actions/icon_c5.png";
import actionIcn6 from "../../Assets/images/icons/actions/icon_c6.png";

type Props = {};

const Action = (props: Props) => {
  return (
    <div className="action__container">
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn1} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn2} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn3} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn4} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn5} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn6} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
    </div>
  );
};

export default Action;
