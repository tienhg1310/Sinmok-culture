import React, { type FC } from "react";

type Props = {
  message: string;
};

const DataError: FC<Props> = ({message}) => {
  return <div>{message}</div>;
};

export default DataError;
