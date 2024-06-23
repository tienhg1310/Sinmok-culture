import React from 'react'
import SectionHeader from '../../Common/SectionHeader/SectionHeader'
import "./styles/board.scss"
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import useBoard from './hooks/useBoard';


type Props = {
    children: React.ReactNode;
};
const Board: React.FC<Props> = (props) => {
    const {
        children,
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