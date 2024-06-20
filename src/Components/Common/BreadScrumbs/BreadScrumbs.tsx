import React, { type FC } from "react";
import { BiHomeAlt2 } from "react-icons/bi";

type Props = {
  breadscrumbs: string[] | undefined[];
};

const BreadScrumbs: FC<Props> = ({ breadscrumbs }) => {
  return (
    <>
      <div className="breadcrumb-item icon">
        <BiHomeAlt2 size={20} />
      </div>
      {breadscrumbs &&
        breadscrumbs.map((item, index) => {
          return (
            <div key={index} className="breadcrumb-item">
              {item}
            </div>
          );
        })}
    </>
  );
};

export default BreadScrumbs;
