import React from 'react'
import { useLocation } from 'react-router';
import { useFindItemWithPath } from '../../../Modules/hooks/useFindItemWithPath';
import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import "../Information/styles/Information.scss";
type Props = {
    children: React.ReactNode
}
export default function Information(props: Props) {
    const { children } = props || {};

    const route = useLocation();
    const { breadsrcumb, childrens } = useFindItemWithPath(route);
    const breadscrumbs = [
        breadsrcumb?.name || "",
        breadsrcumb?.child?.name || "",
    ];
    const childrenActive = childrens?.find(
        (children) => breadsrcumb?.child?.name === children.name
    );

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
            {children}
        </div>
    );
}
