import React, {useState} from 'react';
import styled from "styled-components";

function LoginControl() {

    const [loginClick,setLoginClick] = useState(false);

    const LoginButtonStyle = styled.button`
    background-color : white;
    margin-right : 10px;
    font-size: 0.8rem;
    border: 0.2vw solid #2A2A3A;
    border-radius: 1.5vw;
    background: #white;
    color: #484A64;
    outline: none;
    padding: 0.2vw 1vw 0.2vw 1vw;
    `;
    const WelcomeText = styled.span`
    color: white;
    font-size: 1vw;
    margin-left: 1vw;
  `;

    const  handleLoginClick = () => {
        setLoginClick(true);
    }

    const handleLogoutClick = () =>{
        setLoginClick(false);
    }

    return (
        <div>
            {loginClick 
            ? 
            <span>
                <LoginButtonStyle onClick={handleLogoutClick}>로그아웃</LoginButtonStyle>
                <WelcomeText>환영합니다!</WelcomeText>
            </span>
            : 
            <span>
                <LoginButtonStyle onClick={handleLoginClick}>로그인</LoginButtonStyle>
                <WelcomeText>로그인 해주세요!</WelcomeText>
            </span>
            }
        </div>
    )
}

export default LoginControl;