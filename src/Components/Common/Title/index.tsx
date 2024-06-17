import React from "react";
import "./styles.scss";
interface Props {
    title: string,
    detail: string
    textWhite?: boolean
    titleExtraBold?:boolean
    fsDetail?:number
}
function Title({title,detail,textWhite = false,titleExtraBold = false,fsDetail}:Props) {
  return (
    <div className="titleComponent">
      <div style={{color: textWhite ? "#fff": undefined,fontFamily: titleExtraBold ? 'Pretendard-ExtraBold' : undefined}} className="title">
      {title}
      </div>
      <div className="detail">
        <p style={{color: textWhite ? "#fff": undefined,fontSize: fsDetail}}> 
        {detail}
        </p>
      </div>
    </div>
  );
}

export default Title;
