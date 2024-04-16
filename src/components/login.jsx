import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import youtubeLogo from '../assets/images/youtube.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);

  const handleSignup = () => {
    navigate('/signup');
  };
  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if (userData && userData.email === useremail && userData.password === password) {
      updateUserData({ type: 'LOGIN', payload: userData });
      navigate('/');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };


  return (
    <LoginContainer>
      <HeaderContainer>
        <LogoContainer to="/" style={{ textDecoration: 'none' }}>
          <LogoTag>
            <LogoImage alt="Youtube-Logo" src={youtubeLogo} />
          </LogoTag>
        </LogoContainer>
      </HeaderContainer>
      <LoginContent>
        <LoginHead>Log In</LoginHead>
        <SignInForm>
          <InputContainer>
            <SiginLabel>Email</SiginLabel>
            <SiginInput
              type="email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
              placeholder="Email"
            />
          </InputContainer>
          <InputContainer>
            <SiginLabel>Password</SiginLabel>
            <SiginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </InputContainer>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <SignInButton onClick={handleLogin}>Log In</SignInButton>
        </SignInForm>
        <SignupOption>
          New User?
          <SignupButton type="button" onClick={handleSignup}>
            Signup now
          </SignupButton>
        </SignupOption>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f0f;
`;

const LoginContent = styled.div`
  display: flex;
  width: min-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95%;
`;

const LoginHead = styled.h3`
  color: #f0f0f0;
  font-size: 25px;
  line-height: 5rem;
`;

const SignInForm = styled.form`
  padding: 30px;
  border: 1px solid #666;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div``;

const SiginLabel = styled.label`
  color: #666;
  font-size: 13px;
  line-height: 2em;
`;

const SiginInput = styled.input`
  background-color: transparent;
  color: #f0f0f0;
  width: 300px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const SignInButton = styled.button`
  background-color: #aaa;
  color: #000;
  border-radius: 10px;
  margin-top: 20px;
  padding: 12px 0px;
  cursor: pointer;
  font-weight: bold;
  border: none;
`;

const SignupOption = styled.p`
  color: #666;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px;
`;

const SignupButton = styled.button`
  border: none;
  cursor: pointer;
  color: #3ea6ff;
  background-color: transparent;
  margin: 0px 10px;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderContainer = styled.section`
  background: #0f0f0f;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 50px;
  height: max-content;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 11;
`;

const LogoContainer = styled(Link)`
  width: 150px;
  background-color: #0f0f0f;
  height: 50px;
`;

const LogoTag = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #0f0f0f;
`;

const LogoImage = styled.img`
  background-color: #0f0f0f;
  width: 100%;
  height: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

