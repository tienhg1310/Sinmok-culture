import React from 'react'
import SectionHeader from '../../Common/SectionHeader/SectionHeader'
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import useMyPage from './hooks/useMyPage';
import "../mypage/styles/mypage.scss";


type Props = {
    children: React.ReactNode;
};
const MyPage: React.FC<Props> = (props) => {
    const {
        children,
    } = props || {};

    const {
        childrens,
        breadsrcumb,
        breadscrumbs,
        childrenActive,
    } = useMyPage({ ...props });

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

export default MyPage;