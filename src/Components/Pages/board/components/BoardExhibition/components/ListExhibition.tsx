import { useCallback } from 'react';
import Panigation from '../../../../../Common/Panigation/Panigation';
import useBoardExhibition from '../../../hooks/useBoardExhibition';
import '../styles/Exhibition.scss';

export default function ListExhibition() {

    const {
        exhibitionData,
        setPage,
        setPerPage,
        totalItem,
    } = useBoardExhibition();

    const renderListExhibition = useCallback(() => {
        return exhibitionData.map((item: any) => {
            return (
                <div className='exhibition-item' key={item.id}>
                    <div className='exhibition-img'>
                        <img src={item.img} alt='exhibition-img'/>
                    </div>
                    <div className='exhibition-content'>
                        <strong
                            className='exhibition-title'
                            title={item.tilte || ''}
                        >
                            {item.tilte.length > 18 ? `${item.tilte.slice(0, 18)}...` : item.tilte}
                        </strong>
                        <strong
                            className='exhibition-title-res'
                            title={item.tilte || ''}
                        >
                            {item.tilte.length > 10 ? `${item.tilte.slice(0, 10)}...` : item.tilte}
                        </strong>
                        <div className='exhibition-description'>
                            {item.description}
                        </div>
                    </div>
                </div>
            )
        })
    }, [exhibitionData]);

    return (
        <>
            <div className='exhibition-container'>
                <div className='exhibition-grid'>
                    {renderListExhibition()}
                </div>
            </div>
            <Panigation
                totalPage={Math.ceil(exhibitionData.length / 20)}
                page={1}
                setPage={setPage}
                perPage={16}
                setPerPage={setPerPage}
                totalItem={totalItem}
            />
        </>
    )
}
