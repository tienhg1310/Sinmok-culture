import React, { useState } from 'react'
import SectionHeader from '../../Common/SectionHeader/SectionHeader'
import { useLocation } from 'react-router';
import { useFindItemWithPath } from '../../../Modules/hooks/useFindItemWithPath';
import "./styles/board.scss"
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import SelectInput from '../../Lecture/LectureSearch/SelectInput';
import Slider from '../../Common/Slider';
import useBoard from './hooks/useBoard';


type Props = {
    children: React.ReactNode;
    slider?: React.ReactNode
};
const Board: React.FC<Props> = (props) => {
    const {
        children,
        slider,
    } = props || {};

    const {
        childrens,
        breadsrcumb,
        breadscrumbs,
        childrenActive,
    } = useBoard({ ...props });

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
            <div className='board_content_children'>
                {children}
            </div>
        </div>
    )
}

export default Board;