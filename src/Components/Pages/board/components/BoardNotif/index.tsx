import React, { useMemo } from 'react'
import Board from '../..'
import Table from '../Table'
import '../BoardNotif/boardNotifi.scss'
import Panigation from '../../../../Common/Panigation/Panigation';
import IconDowLoad from "../../../../../Assets/images/downfile.png";
export default function BoardNotifi() {
    const columnData = [
        {
            "id": 1,
            "number_order": "공지",
            "name": "★24년 여름학기 브로셔 보기★",
            "isDowload": true,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 342
        },
        {
            "id": 2,
            "number_order": "공지",
            "name": "★24년 여름학기 접수시작★",
            "isDowload": true,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 530
        },
        {
            "id": 3,
            "number_order": "공지",
            "name": "★문화센터 설 연휴 휴관 안내★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-02-08",
            "total": 701
        },
        {
            "id": 4,
            "number_order": "공지",
            "name": "[신목신협 문화센터] 2024년 봄학기 접수 시작",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-02-06",
            "total": 1242
        },
        {
            "id": 5,
            "number_order": "공지",
            "name": "2023 추석 연휴 휴관안내",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2023-09-27",
            "total": 1465
        },
        {
            "id": 6,
            "number_order": "공지",
            "name": "[신목신협 문화센터] 2023년 가을학기 접수 시작",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2023-08-08",
            "total": 1220
        },
        {
            "id": 7,
            "number_order": "공지",
            "name": "★23 봄학기 접수 안내★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2023-01-20",
            "total": 511
        },
        {
            "id": 8,
            "number_order": "공지",
            "name": "★봄학기 접수 일정★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2022-11-10",
            "total": 377
        },
        {
            "id": 9,
            "number_order": "공지",
            "name": "설 연휴 휴관 안내",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2022-09-28",
            "total": 218
        },
        {
            "id": 10,
            "number_order": "공지",
            "name": "★조합원을 위한 문화센터 혜택★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2022-09-28",
            "total": 1360
        },
        {
            "id": 11,
            "number_order": "공지",
            "name": "★2022 겨울학기 회원모집★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 706
        },
        {
            "id": 12,
            "number_order": "공지",
            "name": "자주 묻는 질문",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-02-06",
            "total": 777
        },
        {
            "id": 13,
            "number_order": "공지",
            "name": "문화센터 취소 및 환불 규정 안내",
            "isDowload": true,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 521
        },
        {
            "id": 14,
            "number_order": 122,
            "name": "★신목신협 문화센터 여름★",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 23
        },
        {
            "id": 15,
            "number_order": 90,
            "name": "설 연휴 휴관 안내",
            "isDowload": false,
            "author": "전체관리자",
            "date": "2024-05-07",
            "total": 40
        }
    ]

    const columnDefs = useMemo(() => {
        const styleColumns = {
            height: 50,
            borderBottom: '1px solid #ddd',
            fontSize: 14
        }
        return [
            {
                field: 'number_order',
                headerName: "번호",
                // minWidth: 80,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,

            },
            {
                field: 'name',
                headerName: "제목",
                // minWidth: 650,
                paddingLeft: 20,
                headerStyle: 'cell-name',
                ...styleColumns
            },
            {
                ...styleColumns,
                field: 'isDowload',
                headerName: "첨부",
                minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                renderCell: (params: any) => {
                    const { column, row, id } = params || {};
                    return (
                        row?.isDowload === true && <button className='btn-dowload'>
                            <img src={IconDowLoad} alt="icon dowload" />
                        </button>
                    )
                },
                hide: true,
            },
            {
                field: 'author',
                headerName: "작성자",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
            {
                field: 'date',
                headerName: "등록일",
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,

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

    return (
        <Board>
            <Table
                columnDefs={columnDefs}
                data={columnData}
                headerStyle='header_table'
                headerHeight={40}
            />
            <Panigation
                totalPage={Math.ceil(columnData.length / 20)}
                page={1}
                setPage={() => { }}
                perPage={20}
                setPerPage={() => { }}
                totalItem={20}
            />
        </Board>
    )
}
