import React, { useEffect, useState } from 'react'
import qaData from '../../data/qaData'
import './QAInfo.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
    qaId: string
}

const QAInfo = ({ qaId }: Props) => {
    const navigate = useNavigate()
    const [qaDataState, setQaDataState] = useState<any>({})

    const findData = () => {
        const findedData = qaData.find((item) => item.id === Number(qaId))
        setQaDataState(findedData)
    }

    useEffect(() => {
        findData()
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div
                style={{
                    paddingBottom: '30px',
                    borderBottom: '1px solid #e0e0e0',
                }}
            >
                <div className="question_info">
                    <div>
                        <p className="question_title">{qaDataState?.name}</p>
                        <p style={{ color: '#5d5d5d' }}>
                            <span style={{ paddingRight: '10px', borderRight: '1px solid gray' }}>
                                {qaDataState.author}
                            </span>
                            <span style={{ paddingLeft: '10px' }}>{qaDataState.date}</span>
                        </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ paddingRight: '10px', borderRight: '1px solid gray' }}>조회</p>
                        <p style={{ paddingLeft: '10px' }}>{qaDataState.total}</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: '35px 40px 70px 40px', borderBottom: '1px solid #e0e0e0', color: '#656565' }}>
                <div className="midd">
                    <div className="textbox">
                        <p>
                            조합원 가입되어 있는데 비 조합원이라고 나오네요&nbsp;
                            <br />
                            <br />
                            변경 해주세요
                        </p>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button
                    className="btn-page"
                    onClick={() => {
                        if (window.confirm('준비중입니다.')) {
                            navigate('/board/qa')
                        }
                    }}
                >
                    쓰기
                </button>
                <button
                    className="btn-page"
                    onClick={() => {
                        if (window.confirm('준비중입니다.')) {
                            navigate('/board/qa')
                        }
                    }}
                    style={{
                        marginLeft: '5px',
                    }}
                >
                    목록
                </button>
            </div>
            <div style={{ width: '100%' }}>
                <div className="bd_detail_tit" style={{ marginBottom: '100px' }}>
                    <h2>{qaDataState.name}</h2>
                    <ul className="info">
                        <li className="part"></li>
                        <li className="date">등록일 : {qaDataState.date}</li>
                    </ul>
                </div>
                <div className="bd_detail_content">
                    <div className="bd_detail_cont">
                        <p>
                            ------------ 원 본 글 시 작 -------------
                            <br />
                            <br />
                            봄학기 목요일 임한별강사님 8시 강좌의 금액이 12,000원으로 되어 있습니다.
                            <br />
                            확인해주세요.
                            <br />
                            우선 나온대로 결재는 했습니다만 120,000원이 잘못 기록된 것으로 보입니다.
                            <br />
                            <br />
                            ------------ 원 본 글 종 료 -------------
                            <br />
                            <br />네 회원님 불편을 드려 죄송합니다.
                            <br />
                            강좌료 수정 되었습니다.
                            <br />
                            불편하시겠지만 취소 후 재결제 부탁 드리겠습니다:)
                        </p>{' '}
                    </div>
                </div>
            </div>
            <div className="btn">
                <button
                    className="btn-page"
                    onClick={() => {
                        if (window.confirm('준비중입니다.')) {
                            navigate('/board/qa')
                        }
                    }}
                >
                    쓰기
                </button>
            </div>
        </div>
    )
}

export default QAInfo
