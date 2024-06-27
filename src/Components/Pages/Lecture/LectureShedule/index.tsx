import { useState } from "react";
import SelectInput from "../../../Lecture/LectureSearch/SelectInput";
import Layout from "../Layout";
import "./index.scss";
import selectIcn1 from "../../../../Assets/images/icons/selectIcon/select_icn1.png";
import selectIcn2 from "../../../../Assets/images/icons/selectIcon/select_icn2.png";
import selectIcn3 from "../../../../Assets/images/icons/selectIcon/select_icn3.png";
import selectIcn4 from "../../../../Assets/images/icons/selectIcon/select_icn4.png";
import selectIcn5 from "../../../../Assets/images/icons/selectIcon/select_icn5.png";
import selectIcn6 from "../../../../Assets/images/icons/selectIcon/select_icn6.png";
import selectIcn7 from "../../../../Assets/images/icons/selectIcon/select_icn7.png";
import selectIcn8 from "../../../../Assets/images/icons/selectIcon/select_icn8.png";
import selectIcn9 from "../../../../Assets/images/icons/selectIcon/select_icn9.png";
import LectureScheduleTable from "../../../Lecture/LectureSchedule/LectureScheduleTable";

const LectureSchedule = () => {
  const icons = [
    selectIcn1,
    selectIcn2,
    selectIcn3,
    selectIcn4,
    selectIcn5,
    selectIcn6,
    selectIcn7,
    selectIcn8,
    selectIcn9,
  ];
  const categories = [
    "온라인학",
    "문화가 있는 날",
    "인문학 · 외국어",
    "실용 · 기타",
    "베이킹 · 식음",
    "노래 · 악기",
    "공예",
    "미술",
    "건강피트니스",
    "엄마랑 아가랑",
    "유아 어린이",
    "대관",
    "기구 필라테스",
  ];

  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Layout>
      <div className="lectureShedule_categories">
        <div className="categories-md">
          <SelectInput
            dropdownId="1"
            options={categories}
            selectedDropdown={selectedDropdown}
            setSelectedDropdown={setSelectedDropdown}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="categories-lg">
          {categories.map((item, index) => {
            return (
              <div key={`${item}-${index}`} className="category">
                <div className="category-image">
                  <img src={icons[Math.floor(Math.random() * 9)]} alt="" />
                </div>
                <div className="category-text">{item}</div>
              </div>
            );
          })}
        </div>
        <LectureScheduleTable />
      </div>
    </Layout>
  );
};

export default LectureSchedule;
