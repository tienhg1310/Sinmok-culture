import React from 'react'
import MyPage from '..'
import Table from '../components/Table'
import useMyCourseReview from './hooks/useMyCourseReview'
import "../MyCourseReview/styles/mycourse.scss"
type Props = {
    [key: string]: any
}
function MyCourseReview(props: Props) {

    const {
        columnDefs
    } = useMyCourseReview({ ...props });

    return (
        <MyPage>
            <ul className="list_1st">
                <li>접수 기간이 지난 경우 문화센터에서만 취소 가능합니다.</li>
            </ul>

            <Table
                data={[]}
                columnDefs={columnDefs}
            />
        </MyPage>
    )
}

export default MyCourseReview