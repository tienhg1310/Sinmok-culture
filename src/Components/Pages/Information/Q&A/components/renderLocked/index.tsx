import React from 'react'
import locked from "../../../../../../Assets/images/list_icon_hold.gif";
import "../renderLocked/locked.scss";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export default function RenderLocked(props: any) {
    const { row } = props || {};

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/board/qa?id=${row?.id}&lock=true`)
    }
    return (
        row?.isLocked === true ?
            <button onClick={handleNavigate} className='btn-dowload'>
                <img src={locked} alt="icon dowload" />
                <span> {row?.name}</span>
            </button> : <Link to={`/board/qa?id=${row?.id}`} className='btn-dowload-link'>{row?.name}</Link>
    )
}
