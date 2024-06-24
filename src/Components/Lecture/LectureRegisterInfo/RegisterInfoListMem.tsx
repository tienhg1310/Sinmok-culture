import React, { FC } from "react";
import "./RegisterInfoListMem.scss";

type Props = {
  iconUrl: string
};

const RegisterInfoListMem:FC<Props> = ({iconUrl}) => {
  return (
    <div className="registerInfoListMem__container">
      <div className="registerInfoListMem__icon">
        <img src={iconUrl} alt="" />
      </div>
      <div className="registerInfoListMem__text">
        <h2 className="registerInfoListMem__title">회원모집</h2>
        <ul className="registerInfoListMem__list">
          <li className="registerInfoListMem__item">
            • {"  "} 매 학기 개강은 3,6,9,12월이며 수강 신청은 2, 5, 8, 11월에
            진행합니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 매년 3, 6, 9, 12월에 정규 강좌가 시작되며, 3개월 (10-12회)
            수업을 원칙으로 합니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 각 강좌는 선착순 마감이며, 정원이 현격히 미달되는 경우
            폐강될 수 있습니다. (강좌가 폐강된 경우 전액 환불해 드리며
            개강일로부터 15일 이내 환불받으셔야 합니다.)
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 학기에 따라 단기과정이 오픈 될 수 있으며 단기과정이 없을 시
            중도 수강인 경우 수강료를 전액 납부하셔야 하며 취소는 불가합니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 강의일정 및 강사는 사정에 따라 변경될 수 있습니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 강의 진행시 필요한 재료비, 교재비 등은 별도입니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 수강증은 타인에게 양도 불가능합니다.
          </li>
          <li className="registerInfoListMem__item">
            • {"  "} 신청 및 문의 : 신목신협 문화센터 양천구 오목로 217 /
            02-2601-8176(문화센터 데스크)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterInfoListMem;
