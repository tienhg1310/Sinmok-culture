import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

type Props = {
    boardData: null | any
}

const dataButton = [
    {
        id: "delete",
        name: "삭제",
    },
    {
        id: "modify",
        name: "수정",
    },
    {
        id: "writ",
        name: "쓰기",
    },
    {
        id: "list",
        name: "목록",
    }
];


export default function BoardDetail(props: Props) {

    const [boardData, setBoardData] = useState<any>(null);

    useEffect(() => {
        const savedData = localStorage.getItem('boardData');
        if (savedData) {
            setBoardData(JSON.parse(savedData));
        }
    }, []);

    const navigate = useNavigate();

    const handleButton = useCallback((id: string) => {
        const messages: { [key: string]: string } = {
            delete: "권한이 없습니다.",
            modify: "글 수정권한이 없습니다.",
            writ: "글 작성권한이 없습니다.",
        };

        if (id === "list") {
            navigate("/board/course");
        } else if (messages[id]) {
            alert(messages[id]);
        }
    }, [navigate]);

    return (
        <>
            <div className='board-detail'>
                <div className='board-detail-head'>
                    <div className='board-detail-head-lay'>
                        <strong>{boardData?.tilte}</strong>
                        <div className='board-detail-head-lay-names'>
                            <em>{boardData?.subContent}</em>
                            <span>{boardData?.date}</span>
                        </div>
                        <div className='board-detail-head-lay-hits'>
                            <em>{boardData?.subTitle}</em>
                            <span>{boardData?.rate}</span>
                        </div>
                    </div>
                </div>
                <div className='board-detail-files' />
                <div className='board-detail-mid'>
                    <div className='board-detail-mid-textbox'>
                        {boardData?.listImg?.map((item: any, index: number) => (
                            <div key={index} style={{ width: "100%", height: "100%" }}>
                                <img src={item?.img} alt={`img-${index}`} />
                            </div>
                        ))}
                        {boardData?.description?.map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className='board-footer-detail-pull'>
                <div className='board-footer-detail-pull-left'></div>
                <div className='board-footer-detail-pull-right'>
                    {dataButton.map((item) => (
                        <button
                            onClick={() => handleButton(item.id)}
                            key={item.id}
                            className={`board-footer-detail-pull-right-${item.id}`}
                            id={`board-footer-detail-pull-right-${item.id}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
