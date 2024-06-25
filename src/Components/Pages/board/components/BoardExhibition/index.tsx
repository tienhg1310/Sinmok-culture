import React from 'react'
import Board from '../..'
import Search from '../Search'
import ListExhibition from './components/ListExhibition'

export default function BoardExhibition() {
    return (
        <Board>
            <div>
                <Search
                    title='전체 19건'
                    selectedDropdown={''}
                    setSelectedDropdown={() => { }}
                    options={["전체"]}
                    selectedOption={'전체'}
                    setSelectedOption={() => { }}
                />
            </div>
            <ListExhibition />
        </Board>
    )
}
