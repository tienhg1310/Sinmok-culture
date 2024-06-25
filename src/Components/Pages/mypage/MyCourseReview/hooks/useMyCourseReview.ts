import { useMemo } from "react";

type MyCourseReview = {
    [key: string]: any
}
const useMyCourseReview = (options: MyCourseReview) => {
    const columnDefs = useMemo(() => {
        const styleColumns = {
            height: 50,
            borderBottom: '1px solid #ddd',
            fontSize: 14
        }
        return [
            {
                field: 'number_order',
                headerName: "주문번호",
                // minWidth: 80,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,

            },
            {
                field: 'name',
                headerName: "강좌정보",
                // minWidth: 650,
                paddingLeft: 20,
                headerStyle: 'cell-name',
                ...styleColumns,
            },

            {
                field: '',
                headerName: "강사",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
            {
                field: 'author',
                headerName: "수강료",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,

            },
            {
                field: 'date',
                headerName: "수강취소",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: false,
            },

            {
                field: 'total',
                headerName: "조회",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
        ]
    }, []);
    return {
        columnDefs
    }
}

export default useMyCourseReview;