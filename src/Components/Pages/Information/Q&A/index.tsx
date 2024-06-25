import React from 'react'
import Information from '..'
import Search from './components/search'
import Table from './components/table'
import qaData from './data/qaData'
import "../styles/InformationQA.scss"
import useQA from './hooks/useQA'
import Panigation from '../../../Common/Panigation/Panigation'
export default function QA() {
    const {
        columnDefs
    } = useQA();

    return (
        <Information>
            <Search
                options={["전체"]}
                title="전체 84건"
                selectedOption="전체"
                selectedDropdown="전체"
                setSelectedOption={() => { }}
                setSelectedDropdown={() => { }}
            />
            <Table
                data={qaData}
                headerStyle='header_table'
                headerHeight={40}
                columnDefs={columnDefs}
            />
            <Panigation
                totalPage={Math.ceil(qaData.length / 20)}
                page={1}
                setPage={() => { }}
                perPage={20}
                setPerPage={() => { }}
                totalItem={20}
            />
            <div className='btn'>
                <button className='btn-page' onClick={() => {
                    alert("준비중입니다.")
                }}>
                    쓰기
                </button>
            </div>

        </Information>
    )
}
