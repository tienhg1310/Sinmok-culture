import React, { useState } from 'react'
import SectionHeader from '../../Common/SectionHeader/SectionHeader'
import { useLocation } from 'react-router';
import { useFindItemWithPath } from '../../../Modules/hooks/useFindItemWithPath';
import "./styles/board.scss"
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import SelectInput from '../../Lecture/LectureSearch/SelectInput';


type Props = {
    children: React.ReactNode;
};
const Board: React.FC<Props> = (props) => {
    const { children } = props || {};
    console.log(children)
    const route = useLocation();
    const { breadsrcumb, childrens } = useFindItemWithPath(route);

    const breadscrumbs = [
        breadsrcumb?.name || "",
        breadsrcumb?.child?.name || "",
    ];

    const childrenActive = childrens?.find(
        (children) => breadsrcumb?.child?.name === children.name
    );

    const options1 = [
        "전체",
    ];
    const [selectedOption1, setSelectedOption1] = useState(options1[0]);
    const [selectedDropdown, setSelectedDropdown] = useState("");
    return (
        <div className="wrapper">
            <SectionHeader
                title={breadsrcumb?.child?.name || ""}
                breadscrumbs={breadscrumbs}
            />
            <SectionNavigation
                childrens={childrens}
                childrenActive={childrenActive}
            />
            <div className="board_content">
                <span className="board_content_title">
                    전체 15건
                </span>
                <div className="board_content_options">
                    <div className='board_content_select'>
                        <SelectInput
                            dropdownId="1"
                            selectedDropdown={selectedDropdown}
                            setSelectedDropdown={setSelectedDropdown}
                            // options={options1}
                            selectedOption={selectedOption1}
                            setSelectedOption={setSelectedOption1}
                        />
                    </div>
                    <input className="board_content_input" />
                    <button className='board_content_submit'>
                        검색
                    </button>
                </div>
            </div>
            <div className='board_content_children'>
                {children}
            </div>
        </div>
    )
}

export default Board;