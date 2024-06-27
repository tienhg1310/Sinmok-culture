import { FC } from "react";
import { useGetLecturePayment } from "../../../Modules/hooks/useGetLecturePayment";
import "./LecturePayment.scss";
import { GoDash } from "react-icons/go";
import { FaEquals } from "react-icons/fa6";
import { IoMdAlert } from "react-icons/io";

type Props = {
  lectureId: string;
};

const LecturePayment: FC<Props> = ({ lectureId }) => {
  const { lecturePaymentInfo } = useGetLecturePayment(lectureId);

  return (
    <div className="payment__wrapper">
      <div className="payment-title">
        <p>수강결제</p>
      </div>
      <div className="payment-container">
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>강좌정보</th>
                <th>신청자명</th>
                <th>수강자명</th>
                <th>수강료</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              {lecturePaymentInfo && (
                <tr>
                  <td className="lecture-info">
                    <div className="lecture-text">
                      <h3>{lecturePaymentInfo.title}</h3>
                      <p>
                        {lecturePaymentInfo.teacher} | {lecturePaymentInfo.semester} | {lecturePaymentInfo.date_range}{" "}
                        {lecturePaymentInfo.time}
                      </p>
                    </div>
                  </td>
                  <td className="td-center">박정훈</td>
                  <td className="td-center">
                    <input type="text" />
                  </td>
                  <td className="td-center">{lecturePaymentInfo.fee}</td>
                  <td className="td-center">{lecturePaymentInfo.fee}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="border">수강료 합계</th>
                <th className="border">할인</th>
                <th className="border">조합원 할인</th>
                <th className="border">총 수강료</th>
              </tr>
            </thead>
            <tbody>
              {lecturePaymentInfo && (
                <tr>
                  <td className="td-center caculate border">
                    {lecturePaymentInfo.fee}
                    <p>
                      <GoDash size={20} />
                    </p>
                  </td>
                  <td className="td-center caculate border" style={{minWidth: "70px"}}>
                    0원
                    <p>
                      <GoDash size={20} />
                    </p>
                  </td>
                  <td className="td-center caculate border">
                    %
                    <p>
                      <FaEquals size={20} />
                    </p>
                  </td>
                  <td className="td-center highlight-text">{lecturePaymentInfo.fee}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="container-alert">
          <IoMdAlert size={20} />
          추가 할인: <input type="checkbox" />
          신목신협 체크카드 결제시 5%추가 할인
        </div>
        <div className="container-button">
          <button>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default LecturePayment;
