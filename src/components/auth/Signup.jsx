    import React, { useState, useContext } from 'react';
    import { UserContext } from '../../App';
    import { Link, useNavigate } from 'react-router-dom';
    import youtubeLogo from '../../assets/images/youtube.jpg';
    import styled from 'styled-components';
    import axios from 'axios';
    import { BASE_URL } from '../../assets/axiosConfig';

    const Signup = () => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { updateUserData } = useContext(UserContext);

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = (e) => {
        setMessage("");
        e.preventDefault();
        let form = new FormData();
        form.append('email',useremail);
        form.append('password',password);
        form.append('name',name);
        form.append('userId',userId);
        axios
        .post(`${ BASE_URL }/auth/register/`,form)
        .then((response)=>{
            let data=response.data.data;
            let status_code=response.data.StatusCode;
            if(status_code===6000){
                console.log(response.data);
                localStorage.setItem("user_data",JSON.stringify(data));
                updateUserData({type:"LOGIN",payload:data});
                navigate('/');
            } else{
            setMessage(response.data.message);
            }
        })
        .catch((error)=>{
            console.log(error.response.status);
            if(error.response.status==401){
            setMessage(error.response.data.detail);
            }
            else {
                setMessage("An unexpected error occurred. Please try again.");
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
            <LoginHead>Sign Up</LoginHead>
            <SignInForm onSubmit={handleSignup}>
            <InputContainer>
                <SiginLabel>Email</SiginLabel>
                <SiginInput type="email" value={useremail} onChange={(e) => setUseremail(e.target.value)} placeholder="Email" required  maxLength={40}/>
            </InputContainer>
            <InputContainer>
                <SiginLabel>Your Name</SiginLabel>
                <SiginInput value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" required  maxLength={30}/>
            </InputContainer>
            <InputContainer>
                <SiginLabel>Username</SiginLabel>
                <SiginInput value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder="Username" required  maxLength={30}/>
            </InputContainer>
            <InputContainer>
                <SiginLabel>Password</SiginLabel>
                <SiginInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"  maxLength={15}/>
            </InputContainer>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            <SignInButton type="submit">Sign Up</SignInButton>
            </SignInForm>
            <SignupOption>
            Already have an account?
            <SignupButton type="button" onClick={handleLogin}>
                Log in
            </SignupButton>
            </SignupOption>
        </LoginContent>
        </LoginContainer>
    );
    };

    export default Signup;

    const LoginContainer = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0f0f0f;
        @media (max-width: 1280px) {
            height: max-content;
        }
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
    @media (max-width: 360px) {
        font-size: 22px;
    }
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
        width: 275px;
    }
    @media (max-width: 320px) {
        width: 250px;
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

