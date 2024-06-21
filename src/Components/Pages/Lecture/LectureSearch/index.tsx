import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import lectureService from "../../../../Modules/API/Lecture.service";
import LectureList from "../../../Lecture/LectureSearch/LectureList";
import SelectInput from "../../../Lecture/LectureSearch/SelectInput";
import Layout from "../Layout";
import "./index.scss";
import icon0 from "../../../../Assets/images/icons/select_icn0.png";
import icon1 from "../../../../Assets/images/icons/select_icn01.png";
import icon2 from "../../../../Assets/images/icons/select_icn02.png";
import { useGetLectureList } from "../../../../Modules/hooks/useGetLectureList";
import Panigation from "../../../Common/Panigation/Panigation";
import { useParams, useSearchParams } from "react-router-dom";
import LectureInfo from "../../../Lecture/LectureInfo/LectureInfo";
import DataError from "../../../Common/DataError/DataError";

const LectureSearch = () => {
  const options1 = [
    "봄학기 (2019년)",
    "여름학기 (2019년)",
    "가을학기 (2022년)",
    "겨울학기 (2022년)",
    "봄학기 (2023년)",
    "여름학기 (2023년)",
    "가을학기 (2023년)",
    "겨울학기 (2023년)",
  ];
  const options2 = ["성인", "어린이,청소년", "대관", "1일 특강", "이벤트 공연"];
  const options3 = [
    "온리신협",
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
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [selectedOption3, setSelectedOption3] = useState(options3[0]);
  const {
    lectureList,
    loading,
    error,
    page,
    setPage,
    perPage,
    totalPage,
    totalItem,
    handleChangePerPage,
  } = useGetLectureList();
  const [searchParams] = useSearchParams();
  const lectureId = searchParams.get("id");

  return (
    <Layout>
      {!lectureId && (
        <div className="body_container">
          <div className="section_search">
            <SelectInput
              dropdownId="1"
              selectedDropdown={selectedDropdown}
              setSelectedDropdown={setSelectedDropdown}
              options={options1}
              selectedOption={selectedOption1}
              setSelectedOption={setSelectedOption1}
              icon={icon1}
            />
            <SelectInput
              dropdownId="2"
              selectedDropdown={selectedDropdown}
              setSelectedDropdown={setSelectedDropdown}
              options={options2}
              selectedOption={selectedOption2}
              setSelectedOption={setSelectedOption2}
              icon={icon2}
            />
            <SelectInput
              dropdownId="3"
              selectedDropdown={selectedDropdown}
              setSelectedDropdown={setSelectedDropdown}
              options={options3}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              icon={icon0}
            />
            <div className="search_input">
              <input
                type="text"
                placeholder="검색어(강좌명/강사명)을 입력하세요."
              />
              <button>
                <IoIosSearch size={28} />
              </button>
            </div>
          </div>
          {!error ? (
            <>
              <div style={{ width: "100%" }}>
                {!loading ? (
                  <LectureList lectureList={lectureList} />
                ) : (
                  <div>loading</div>
                )}
              </div>
              <Panigation
                totalPage={+totalPage}
                page={page}
                setPage={setPage}
                perPage={perPage}
                setPerPage={handleChangePerPage}
                totalItem={totalItem}
              />
            </>
          ) : (
            <DataError message={error} />
          )}
        </div>
      )}
      {lectureId && <LectureInfo lectureId={lectureId} />}
    </Layout>
  );
};

export default LectureSearch;
