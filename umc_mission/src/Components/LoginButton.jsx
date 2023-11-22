// LoginButton.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginButtonStyle = styled.button`
  background-color: white;
  margin-left: auto;
  margin-right: 10px;
  font-size: 0.8rem;
  border: 0.2vw solid #2a2a3a;
  border-radius: 1.5vw;
  background: #white;
  color: #484a64;
  outline: none;
  padding: 0.2vw 1vw 0.2vw 1vw;
`;

const WelcomeText = styled.span`
  color: white;
  font-size: 1vw;
  margin-left: 1vw;
`;

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Link to="/login">
        <LoginButtonStyle onClick={handleButtonClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </LoginButtonStyle>
      </Link>
      <WelcomeText>
        {isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}
      </WelcomeText>
    </div>
  );
};

export default LoginButton;
