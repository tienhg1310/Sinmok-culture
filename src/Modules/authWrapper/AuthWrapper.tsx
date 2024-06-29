import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

type Props = {
  auth: boolean;
  element: JSX.Element;
};

const AuthWrapper: FC<Props> = ({ auth, element }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!auth) {
    return element;
  } else {
    if (isAuthenticated) {
      return element;
    } else {
      const confirmResult = window.confirm("로그인 후 이용가능합니다.");
      if (confirmResult) {
        return <Navigate to="/auth/login" />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }
};

export default AuthWrapper;
