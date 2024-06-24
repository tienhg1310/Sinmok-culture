import RegisterInfoBenefit from "../../../Lecture/LectureRegisterInfo/RegisterInfoBenefit";
import RegisterInfoListMem from "../../../Lecture/LectureRegisterInfo/RegisterInfoListMem";
import RegisterInfoText from "../../../Lecture/LectureRegisterInfo/RegisterInfoText";
import Layout from "../Layout";
import "./index.scss";
import memberIcn from "../../../../Assets/images/icons/member_icn.png"
import memberQuestionIcn from "../../../../Assets/images/icons/member_question.png"
import memberAlertIcn from "../../../../Assets/images/icons/member_alert.png"

const LectureRegisterInfo = () => {
  return (
    <Layout>
      <RegisterInfoText />
      <RegisterInfoBenefit />
      <RegisterInfoListMem iconUrl={memberIcn}/>
      <RegisterInfoListMem iconUrl={memberQuestionIcn}/>
      <RegisterInfoListMem iconUrl={memberAlertIcn}/>
    </Layout>
  );
};

export default LectureRegisterInfo;
