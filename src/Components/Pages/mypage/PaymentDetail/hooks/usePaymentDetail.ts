import { useMemo } from "react";

type MyCourseReview = {
    [key: string]: any
}
const usePaymentDetail = (options: MyCourseReview) => {
    const columnDefs = useMemo(() => {
        const styleColumns = {
            height: 50,
            borderBottom: '1px solid #ddd',
            fontSize: 14
        }
        return [
            {
                field: 'number_order',
                headerName: "글번호",
                // minWidth: 80,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,

            },
            {
                field: 'name',
                headerName: "강좌명",
                // minWidth: 650,
                paddingLeft: 20,
                headerStyle: 'cell-name',
                ...styleColumns,
            },

            {
                field: '',
                headerName: "제목",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: false,
            },
            {
                field: 'author',
                headerName: "작성일",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
            },
            {
                field: 'date',
                headerName: "조회수",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            }
        ]
    }, []);
    return {
        columnDefs
    }
}

export default usePaymentDetail;