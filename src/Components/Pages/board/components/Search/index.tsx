import React from 'react'
import SelectInput from '../../../../Lecture/LectureSearch/SelectInput'
import "../Search/Search.scss"
type props = {
    setSelectedDropdown?: string | any;
    setSelectedOption?: any;
    selectedDropdown?: string | any;
    selectedOption?: any;
    options?: any[];
    title?: string;
}
export default function Search(props: props) {

    const {
        setSelectedDropdown,
        setSelectedOption,
        selectedDropdown,
        selectedOption,
        options,
        title
    } = props || {};

    return (
        <div className="board_content">
            <span className="board_content_title">
                {title}
            </span>
            <div className="board_content_options">
                <div className='board_content_select'>
                    <SelectInput
                        dropdownId="1"
                        selectedDropdown={selectedDropdown}
                        setSelectedDropdown={setSelectedDropdown}
                        options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
                <input className="board_content_input" />
                <button className='board_content_submit'>
                    검색
                </button>
            </div>
        </div>
    )
}
