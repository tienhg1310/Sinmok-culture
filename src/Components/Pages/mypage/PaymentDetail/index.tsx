import React from 'react'
import MyPage from '..'
import Table from '../components/Table'
import usePaymentDetail from './hooks/usePaymentDetail'

type Props = {
    [key: string]: any
}
function PaymentDetail(props: Props) {
    const {
        columnDefs
    } = usePaymentDetail({ ...props });
    return (
        <MyPage>
            <Table
                data={[]}
                columnDefs={columnDefs}
            />
        </MyPage>
    )
}

export default PaymentDetail