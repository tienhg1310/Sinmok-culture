import React from 'react'

function Angree() {
    return (
        <div className="agree">
            <form name="MemberRCVForm" id="MemberRCVForm" action="#" method="post">
                <div className="check">
                    <span className="bxCheck">
                        <label htmlFor="mailing-yes" className="container">
                            <input type="checkbox" name="mailing" id="mailing-yes" title="이메일" defaultValue="Y" />E-Mail
                            <span className="checkmark" />
                        </label>
                    </span>
                    <span className="bxCheck">
                        <label htmlFor="sms-yes" className="container">
                            <input type="checkbox" name="sms" id="sms-yes" title="sms" defaultValue="Y" />SMS
                            <span className="checkmark" /></label>
                    </span>
                    <p>수신 동의하시면 다양한 서비스를 제공 받으실 수 있습니다.</p>
                </div>
                <a href="#"><span className="tag mg" id="ReceiveSave">저장</span></a>
            </form>
        </div>
    )
}

export default Angree