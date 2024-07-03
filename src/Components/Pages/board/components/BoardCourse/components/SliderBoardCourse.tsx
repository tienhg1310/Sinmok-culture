import React from "react";
import Buff from "../../../../../../Assets/images/buff.jpg";
import fit from "../../../../../../Assets/images/fit.png";
import food from "../../../../../../Assets/images/food.jpg";
import ves from "../../../../../../Assets/images/ves.jpg";
import snack from "../../../../../../Assets/images/snack.jpg";
import yoga from "../../../../../../Assets/images/yoga.jpg";
import man from "../../../../../../Assets/images/man.jpg";
import gym from "../../../../../../Assets/images/gym.png";
import flo from "../../../../../../Assets/images/flo.png";
import SelectIcon from "../../../../../../Assets/images/select_icn04.png";
import { SwiperSlide } from "swiper/react";
import IconRate from "../../../../../../Assets/images/icons/IconRate";
import fakeDb from "../../../../../../db.json";
import { useNavigate } from "react-router-dom";

export default function SliderBoardCourse() {
    const slides = fakeDb.Lectures;
    const navigate = useNavigate();

    const clickToDetail = (id: number) => {
        navigate(`/lecture/find?id=${id}`);
    };

    return slides.map((item: any, index: number) => (
        <SwiperSlide key={item?.id}>
            <div className={`swipper_container `}>
                <div className="left">
                    <div className="best">
                        <img src={SelectIcon} alt="select" />
                    </div>
                    <div className="swipper_content_1">
                        {item?.image_url !== null ? (
                            <img
                                className={`swipper_img`}
                                src={item?.image_url}
                                alt={item?.title}
                                onClick={() => clickToDetail(item.id)}
                            />
                        ) : (
                            <div className="swipper_img_1" />
                        )}
                    </div>
                </div>
                <div className="swipper_content_2">
                    <p onClick={() => clickToDetail(item.id)} className="swipper_title">
                        {item?.title}
                    </p>
                    <p onClick={() => clickToDetail(item.id)} className="swipper_subContent">
                        {item?.subContent}
                    </p>
                    <div className="swipper_titleContent">
                        <span className="swipper_child_content">김○희</span>
                        <span>{item?.date_range}</span>
                    </div>
                    <div className="swipper_rating">
                        {Array.from({ length: Math.round(item?.rating) }, (_, index) => (
                            <IconRate key={index} style={{ marginRight: 10 }} />
                        ))}
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));
}
