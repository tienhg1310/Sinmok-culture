import React from 'react'
import credit from '../../../../../Assets/images/credit.jpg';
import text from '../../../../../Assets/images/0301_txt_01.png';

export default function InformationCreditHeader() {
    return (
        <div className='information-credit-header'>
            <div className="credit-img">
                <img src={credit} alt="credit" />
            </div>
            <div className='credit-text'>
                <img src={text} alt="text" />
                <p>
                    신목신협 문화센터에서 진행하는 다채로운 강좌들을 통해
                    <br />
                    코로나에 지친 마음은 잠시 멀어지고
                    <br />
                    희망과 따뜻한 위로가 전해지길 바랍니다.
                </p>
            </div>
        </div>
    )
}
