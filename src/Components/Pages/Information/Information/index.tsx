import React from 'react'
import Informations from "../index";
import "../Information/info.scss";
export default function Information() {
    return (
        <Informations>
            <div className="info">
                <div className="tit">
                    <strong>
                        <span>
                            행복이 시작되는곳!<br />
                        </span>
                        신목신협과 함께 하세요.
                    </strong>
                </div>
                <div className="txt1">
                    <p>신목신협 문화센터에서는<br />분야별 수준 높은 교육문화 컨텐츠와 열정적인 전문 강사님을 모십니다.</p>
                    <a className="btn_1 button_down black" href="/kr/download/applyForm.hwp">지원서 다운로드<span className="ico_ir1 bnt_icn3" /></a>
                    <a className="btn_1 button_small blue" href="#" id="apply">강사지원하기<span className="ico_ir1 bnt_icn2" /></a>
                    <p className="text_1">※ 지원을 원하시는 분은  지원서를 다운받으셔서 작성 바랍니다.</p>
                </div>
            </div>

        </Informations>
    )
}
