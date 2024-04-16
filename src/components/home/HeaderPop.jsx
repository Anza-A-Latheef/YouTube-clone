import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PiSignInLight ,PiSignOutLight} from "react-icons/pi";
import {useNavigate } from 'react-router-dom';

const HeaderPop  = forwardRef((props, ref) =>{
    const navigate=useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const savedUserData = localStorage.getItem('user_data');
        if (savedUserData) {
          setUserData(JSON.parse(savedUserData));
        }
      }, []);

    const handleLogin=()=>{
        navigate(`/login`)}
    const handleSignup=()=>{
        navigate(`/signup`)}

  return (
    <HeaderpopContainer ref={ref}>
        <PopupTop>
            <Profile>{userData ? userData.name.charAt(0) : ''}</Profile>
            <UserData>
                <Name>{userData ? userData.name : ''}</Name>
                <UserName>{userData ? `@${userData.userId}` : ''}</UserName>
                <ViewChannel>View your channel</ViewChannel>
            </UserData>
        </PopupTop>
      <PopupBottom>
            <SignButton onClick={()=>{handleLogin()}}><PiSignOutLight size={25}/> Sign in</SignButton>
            <SignButton onClick={()=>{handleSignup()}}><PiSignInLight size={25}/> Sign out</SignButton>
      </PopupBottom>
    </HeaderpopContainer>
);
});

export default HeaderPop

    const HeaderpopContainer=styled.div`
        z-index: 11;
        position: absolute;
        top: 9px;
        right: 94px;
        width: 345px;
        background-color: #333333;
        border-radius: 20px;
        padding: 20px;
    `;

    const PopupTop=styled.div`
        display:flex;
        gap: 15px;
        padding-bottom: 15px;
    `;

    const Profile=styled.button`
            cursor: pointer;
            border: none;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #808080;
            color: #ffffff;
        `;

    const UserData=styled.div`
        display: flex;
        flex-direction: column;
    `;

    const Name=styled.p`
        color: #f0f0f0;
        font-size: 15px;
        
        `;

    const UserName=styled.p`
        color: #f0f0f0;
        font-size: 15px;
        
    `;

    const ViewChannel=styled.a`
        color: #3ea6ff;
        font-size: 13px;
        cursor: pointer;
    `;

    const PopupBottom=styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-top: 1px solid #666;
    `;

    const SignButton=styled.button`
        background-color: transparent;
        border: none;
        outline: none;
        color: #f0f0f0;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        padding: 10px;
        cursor: pointer;
    `;
