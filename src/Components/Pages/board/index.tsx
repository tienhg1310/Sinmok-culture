import React from 'react'
import SectionHeader from '../../Common/SectionHeader/SectionHeader'
import { useLocation } from 'react-router';
import { useFindItemWithPath } from '../../../Modules/hooks/useFindItemWithPath';
import "./styles/board.scss"
import SectionNavigation from '../../Common/SectionNavigation/SectionNavigation';
import useBreadsrcumb from './hooks/useBreadsrcumb';
export default function Board() {

    const {
        breadsrcumb,
        childrens
    } = useBreadsrcumb({});

    console.log(childrens)
    console.log(breadsrcumb)
    return (
        <div className="container">
            <h1>Responsive Container</h1>
            <p>This is a responsive container that will adjust its width based on the screen size.</p>
            <p>On larger screens, it will take up 80% of the width with a maximum of 800px.</p>
            <p>On smaller screens, it will take up 90% of the width.</p>
            <p>On mobile screens, it will take up 95% of the width and have reduced padding.</p>
        </div>
    )
}
