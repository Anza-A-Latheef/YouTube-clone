import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {useNavigate } from 'react-router-dom';
import youtubeLogo from '../assets/images/youtube.jpg'

	const Login = forwardRef((props, ref) =>{
		const navigate=useNavigate();
		const handleSignup=()=>{
			navigate(`/signup`)}
		return (
		<LoginContainer>
			 <HeaderContainer>
					<LogoContainer>
						<LogoTag>
							<LogoImage alt='Youtube-Logo' src={youtubeLogo} />
						</LogoTag>
					</LogoContainer>
        	</HeaderContainer>
			<LoginContent>
				<LoginHead>Sign In</LoginHead>
				<SignInForm>
					<InputContainer>
						<SiginLabel>Your Name</SiginLabel>
						<SiginInput type='text' placeholder="Your Name"/>
					</InputContainer>
					<InputContainer>
						<SiginLabel>Username</SiginLabel>
						<SiginInput type='text' placeholder="Username"/>
					</InputContainer>
					<InputContainer>
						<SiginLabel>Password</SiginLabel>
						<SiginInput type='password' placeholder="Password"/>
					</InputContainer>
					<SignInButton>Sign In</SignInButton>
					<SignupOption>Already have an account? <SignupButton onClick={()=>{handleSignup()}}>Sign Up</SignupButton></SignupOption>
				</SignInForm>
			</LoginContent>
		</LoginContainer>
	);
	});

	export default Login

	const LoginContainer=styled.div`
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #0f0f0f;
		
		`;

const LoginContent=styled.div`
		display:flex;
		width: min-content;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 95%;
		`;

const LoginHead=styled.h3`
	color: #f0f0f0;
	font-size: 25px;
	line-height: 5rem;
	`;

const SignInForm=styled.form`
	padding: 30px;
	border: 1px solid #666;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	`;
const InputContainer=styled.div`
	
	`;

	const SiginLabel=styled.label`
		color: #666;
		font-size: 13px;
		line-height: 2em;
	`;

const SiginInput=styled.input`
		background-color: transparent;
		color: #f0f0f0;
		width: 300px;
		padding: 10px;
		margin-bottom: 15px;
		border-radius: 10px;
	`;

	const SignInButton=styled.button`
		background-color: #aaa;
		color: #000;
		border-radius: 10px;
		margin-top:20px;
		padding: 12px 0px;
		cursor: pointer;
		font-weight: bold;
		border: none;
	`;
	const SignupOption=styled.p`
	 	color: #666;
		border-radius: 10px;
		cursor: pointer;
		font-size: 12px;
		margin-top: 10px;
	`;
	const SignupButton=styled.button`
		border: none;
		cursor: pointer;
		color: #3ea6ff;
		background-color: transparent;
		margin: 0px 10px;
		font-size: 12px;
		&:hover{
			text-decoration: underline;
		}

	`;

const HeaderContainer=styled.section`
background: #0f0f0f;
display: flex;
align-items: center;
width: 100%;
padding:5px 50px;
height: max-content;
justify-content: space-between;
position:sticky;
top: 0;
z-index: 11;
`;

const LogoContainer=styled.h1`
width: 150px;
background-color: #0f0f0f;
height: 50px;
`;

const LogoTag=styled.a`
cursor: pointer;
width: 100%;
height: 100%;
background-color: #0f0f0f;
`;

const LogoImage=styled.img`
background-color: #0f0f0f;
width: 100%;
height: 100%;
`;

