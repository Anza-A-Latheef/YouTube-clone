    import React, { useState, useContext } from 'react';
    import styled from 'styled-components';
    import youtubeLogo from '../../assets/images/youtube.jpg';
    import { Link, useNavigate } from 'react-router-dom';
    import { UserContext } from '../../App';
    import axios from 'axios';
    import { BASE_URL } from '../../assets/axiosConfig';

    const Login = () => {
        const [username, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const navigate = useNavigate();
        const { updateUserData } = useContext(UserContext);

    const handleSignup = () => {
        navigate('/signup');
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
    
        if (!username || !password) {
            setErrorMessage("Username and Password are required.");
            return;
        }
    
        axios
            .post(`${BASE_URL}`, {"username": username, "password": password})
            .then((response) => {
                let data = response.data;
                localStorage.setItem("token", JSON.stringify(data.token));
                localStorage.setItem("username", username);
                updateUserData({type: "LOGIN", payload: data});
                console.log(data.token);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.response.status);
                if (error.response.status === 401) {
                    setErrorMessage("Invalid user credential.");
                } else {
                    setErrorMessage("An error occurred. Please try again.");
                }
            });
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
                    <SiginLabel>Username</SiginLabel>
                    <SiginInput type="name" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username"  maxLength={30}/>
                </InputContainer>
                <InputContainer>
                    <SiginLabel>Password</SiginLabel>
                    <SiginInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  maxLength={15}/>
                </InputContainer>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <SignInButton onClick={handleSubmit}>Log In</SignInButton>
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
    @media (max-width: 360px) {
        padding: 20px;
    }
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
    @media (max-width: 360px) {
        width: 235px;
    }
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
    @media (max-width: 360px) {
        padding: 10px 30px;
    }
    `;

    const LogoContainer = styled(Link)`
        width: 150px;
        background-color: #0f0f0f;
        height: 50px;
    @media (max-width: 360px) {
        width: 100px;
        height: 38px;
    }
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

