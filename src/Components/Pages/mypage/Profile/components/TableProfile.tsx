import React from 'react'

function TableProfile() {
    return (
        <table className="tableStyle_thleft">
            <caption>
                <strong>표테이블</strong>
                <details><summary>표입니다.</summary></details>
            </caption>
            <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '35%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '35%' }} />
            </colgroup>
            <tbody>
                <tr>
                    <th className="title">등급</th>
                    <td colSpan={3}><span className="label label-rouded label-default">비조합원</span></td>
                </tr>
                <tr>
                    <th className="title">성명</th>
                    <td>박정훈</td>
                    <th className="title">생년월일</th>
                    <td>1986.02.24</td>
                </tr>
                <tr>
                    <th className="title">휴대전화</th>
                    <td>010-3905-0101</td>
                    <th className="title">e-mail</th>
                    <td>fireking5997@gmail.com</td>
                </tr>
                <tr>
                    <th className="title">주소</th>
                    <td colSpan={3}>(우)01080 서울 강북구 수유로23길 2 (수유동)</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableProfile