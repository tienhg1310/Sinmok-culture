import React from 'react'
import locked from "../../../../../../Assets/images/list_icon_hold.gif";
import "../renderLocked/locked.scss";
export default function RenderLocked(props: any) {
    const { row } = props || {};

    return (
        <button className='btn-dowload'>
            <img src={locked} alt="icon dowload" />
            <span> {row?.name}</span>
        </button>
    )
}
