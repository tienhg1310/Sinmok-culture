import React from 'react'

export default function FormQA() {
    return (
        <form id="PassChkForm" name="PassChkForm" className="form-signin" onSubmit={() => alert("작성시 입력한 비밀번호를 올바르게 입력하세요.")}>
            <h2 className="form-signin-heading">비밀번호를 입력하세요!</h2>
            <hr className="mb-4" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input id="inputPassword" className="form-control" placeholder="글 작성시 기입한 비밀번호" required type="password" name="ntt_pwd" />
            <hr className="mb-4" />
            <div className="row">
                <div onClick={() => alert("비밀글입니다.")} className="btn btn-lg btn-default">취 소</div>
                <button className="btn btn-lg btn-primary pull-right" type="submit">확 인</button>
            </div>
        </form>
    )
}
