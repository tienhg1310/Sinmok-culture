import React, { useEffect, useState } from 'react'
import Information from '..'
import Search from './components/search'
import Table from './components/table'
import qaData from './data/qaData'
import "../styles/InformationQA.scss"
import useQA from './hooks/useQA'
import Panigation from '../../../Common/Panigation/Panigation'
import { useSearchParams } from 'react-router-dom'
import FormQA from './components/form-qa'

const HomeQA = ({
    columnDefs
}: any) => {
    return (
        <>
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
        </>
    )
}
const QA = () => {
    const {
        columnDefs
    } = useQA();

    const [searchParams] = useSearchParams();
    const [hasId, setHasId] = useState(false);

    useEffect(() => {
        const id = searchParams.get('id');
        const isLocked = searchParams.get('lock');
        if (id && isLocked) {
            setHasId(true);
        } else {
            setHasId(false);
        }
    }, [searchParams]);

    return (
        <Information>
            {
                hasId ? <FormQA /> : <HomeQA columnDefs={columnDefs} />
            }

        </Information>
    )
}

export default QA