import { Link } from "react-router-dom";
import errorIcon from "../../../Assets/images/icons/404_error.png";
import "./pageErr.scss";

function PageErr() {
  return (
    <div className="err-page">
      <div className="err-image">
        <img src={errorIcon} />
      </div>
      <h2>404</h2>
      <p>
        Page not found, <Link to="/">return to homepage</Link>
      </p>
    </div>
  );
}

export default PageErr;
