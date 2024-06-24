import React from 'react'
import Information from '..'
import "../InformationMap/map.scss";
export default function InformationMap() {
    return (
        <Information>
            <div className='container'>
                <iframe
                    src="https://kko.to/WSnvJqjXrM"
                    width={"100%"}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />


                <div className='map-text'>
                    <div className='text_map_title'>
                        <strong>서울특별시 양천구 오목로 217 신협빌딩</strong>
                        <p>문의처 : 02-2608-8176</p>
                    </div>
                    <a href='https://map.kakao.com/?map_type=TYPE_MAP&itemId=25612063&q=%EC%8B%A0%EB%AA%A9%EC%8B%A0%ED%98%91+%EB%B3%B8%EC%A0%90&urlLevel=3&urlX=469435&urlY=1118473' target='_blank'>
                        카카오맵 보기
                    </a>
                </div>
            </div>
        </Information>
    )
}
