import "./Action.scss";
import actionIcn1 from "../../Assets/images/icons/actions/icon_c1.png";
import actionIcn2 from "../../Assets/images/icons/actions/icon_c2.png";
import actionIcn3 from "../../Assets/images/icons/actions/icon_c3.png";
import actionIcn4 from "../../Assets/images/icons/actions/icon_c4.png";
import actionIcn5 from "../../Assets/images/icons/actions/icon_c5.png";
import actionIcn6 from "../../Assets/images/icons/actions/icon_c6.png";
import { useNavigate } from "react-router-dom";

type Props = {};

const Action = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="action__container">
      <div className="action-item" onClick={() => navigate("/lecture/find")}>
        <div className="action-image">
          <img src={actionIcn1} alt="" />
        </div>
        <p className="action-title">강좌검색</p>
      </div>
      <div className="action-item" onClick={() => navigate("/lecture/schedule")}>
        <div className="action-image">
          <img src={actionIcn2} alt="" />
        </div>
        <p className="action-title">강좌스케쥴</p>
      </div>
      <div className="action-item">
        <div className="action-image">
          <img src={actionIcn3} alt="" />
        </div>
        <p className="action-title">브로슈어</p>
      </div>
      <div className="action-item" onClick={() => navigate("/information/map")}>
        <div className="action-image">
          <img src={actionIcn4} alt="" />
        </div>
        <p className="action-title">예약하기</p>
      </div>
      <div className="action-item" onClick={() => navigate("/board/course")}>
        <div className="action-image">
          <img src={actionIcn5} alt="" />
        </div>
        <p className="action-title">강좌후기</p>
      </div>
      <div className="action-item" onClick={() => navigate("/information")}>
        <div className="action-image">
          <img src={actionIcn6} alt="" />
        </div>
        <p className="action-title">강사지원</p>
      </div>
    </div>
  );
};

export default Action;
