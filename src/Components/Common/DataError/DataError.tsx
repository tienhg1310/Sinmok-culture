import React, { type FC } from "react";
import errorAsset from "../../../Assets/images/error_asset.png";
import "./DataError.scss";

type Props = {
  message: string;
};

const DataError: FC<Props> = ({ message }) => {
  return (
    <div className="error_container">
      <div className="error_image">
        <img src={errorAsset} alt="" />
      </div>
      <div className="error_message">{message}</div>
    </div>
  );
};

export default DataError;
