import React from 'react';
import "../Tab/Tab.scss";
import useTab from './hooks/useTab';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
//import css swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Tab(options: any) {
    const {
        data,
        label,
        title,
        subTitle,
        description,
        imgList
    } = options || {};

    const {
        activeTab,
        handleActiveTab,
        activeVideo,
        handleActiveVideo
    } = useTab();

    return (
        <div className="tab-container">
            <div className="tab-header">
                <h2 className='tab-title'>
                    {title}
                </h2>
                <ul className='wrap-tab-list' >
                    {
                        data?.map((item: any, index: number) => (
                            <li
                                key={item[label]}
                                className={`tab-button ${activeTab === index ? "active-tab" : ""}`}
                                onClick={() => handleActiveTab(index)}
                            >
                                {item[label]}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='tab-body'>
                <div className='txt'>
                    <h3>
                        {data[activeTab][label]}
                        <span>
                            {data[activeTab][subTitle]}
                        </span>
                    </h3>
                    <p>{data[activeTab][description]}</p>
                </div>
                <div className='cont'>
                    <ul className="cont-list">
                        <li className="tab-list-02" onClick={() => handleActiveVideo('img')}>
                            <div className="ir icn01">
                                <strong>포토갤러리</strong>
                                <span>다양한 사진을 확인하세요!</span>
                            </div>
                        </li>
                        <li className="tab-list-02" onClick={() => handleActiveVideo('video')}>
                            <div className="ir icn02">
                                <strong>동영상</strong>
                                <span>마치 그곳에 있는 것처럼 360도 전경을 한눈에 확인하세요!</span>
                            </div>
                        </li>
                    </ul>
                    <div className='wrap-items'>
                        {
                            activeVideo === 'img' ?
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        enabled: false,
                                        clickable: false,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {
                                        data[activeTab][imgList]?.map((item: any, index: number) => (
                                            <SwiperSlide key={`img-${index}`}>
                                                <img src={item} alt={`img-${index}`} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                                :
                                <video controls className="mySwiper" autoPlay>
                                    <source src="https://www.sinmok-culture.co.kr/kr/videos/gx_room.mp4" type="video/mp4" />
                                </video>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
