    import React, { useState, useRef, useEffect } from 'react';
    import styled from 'styled-components'
    import youtubeLogo from '../../assets/images/youtube.jpg'
    import { CiSearch } from "react-icons/ci";
    import { FaMicrophone } from "react-icons/fa6";
    import { RiVideoAddLine } from "react-icons/ri";
    import { FaRegBell } from "react-icons/fa";
    import HeaderPop from './HeaderPop';
    import { RxHamburgerMenu } from "react-icons/rx";
    

    const Header = ({ toggleYouTubeHomeLeft }) => {
        const [isProfileOpen, setIsProfileOpen] = useState(false);
        const [usernameInitial, setUsernameInitial] = useState('U');
        const popRef = useRef(null);

        useEffect(() => {
            const savedUserData = localStorage.getItem('user_data');
            if (savedUserData) {
                const userData = JSON.parse(savedUserData);
                setUsernameInitial(userData.userId.charAt(0).toUpperCase());
            }
        }, []);
    
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (popRef.current && !popRef.current.contains(event.target)) {
                    setIsProfileOpen(false);
                }
            };
    
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);
    
        const toggleProfile = () => {
            setIsProfileOpen(prevState => !prevState);
        };
    
    return (
        <HeaderContainer>
            <Left>
                <HamburgerIcon onClick={toggleYouTubeHomeLeft}><RxHamburgerMenu /></HamburgerIcon>
                <LogoContainer>
                    <LogoTag>
                        <LogoImage alt='Youtube-Logo' src={youtubeLogo} />
                    </LogoTag>
                </LogoContainer>
                <SearchTab>
                    <SearchInput type="text" placeholder='Search'/>
                    <SearchIcon><CiSearch /></SearchIcon>
                    <VoiceSearch><FaMicrophone /></VoiceSearch>
                </SearchTab>
            </Left>
            <Right>
                <Create><RiVideoAddLine /></Create>
                <Notification><FaRegBell /></Notification>
                <NotificationNo>9+</NotificationNo>
                <Profile onClick={toggleProfile}>{usernameInitial}</Profile>
            </Right>
            {isProfileOpen && <HeaderPop/>}
        </HeaderContainer>
    )
    }

    export default Header

    // styling Area

const HeaderContainer=styled.section`
    background: #0f0f0f;
    display: flex;
    align-items: center;
    width: 100%;
    padding:5px 30px;
    height: max-content;
    justify-content: space-between;
    position:sticky;
    top: 0;
    z-index: 11;
`;

const Left=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 73%;
    `;

    const HamburgerIcon=styled.button`
        display: none;
        background-color: transparent;
        color: #f0f0f0;
        font-size: 25px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        position: absolute;
        top:13px;
        left: 15px;
        border: none;
            @media (max-width: 980px) {
                display:flex;
                top:14px;
                left: 6px;
            }
            @media (max-width: 540px) {
                font-size: 19px;
                top:16px;
                left: 9px;
        }
    `;

const LogoContainer=styled.h1`
    width: 100px;
    background-color: #0f0f0f;
    height: 30px;
    @media (max-width: 540px) {
        width: 70px;
        height: 20px;
        }
    @media (max-width: 480px) {
        width: 70px;
        height: 20px;
        }
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

const SearchTab=styled.div`
    display: flex;
    align-items: center;
    width: 67%;
    @media (max-width: 360px) {
            display: none;
        }
`;

    const SearchInput=styled.input`
        width: 100%;
        height:40px;
        position: relative;
        font-size: medium;
        background-color: #121212;;
        border: 1px solid #303030;;
        border-right: none;
        border-radius: 40px 0 0 40px;
        color: #ffffffe0;
        padding: 0 4px 0 16px;
        @media (max-width: 540px) {
            height:35px;
            font-size: 12px;
            color: #ffffffe0;
            padding: 0 4px 0 10px;
        }
    `;

    const SearchIcon=styled.button`
        cursor: pointer;
        color: #ffffff;
        display: flex;
        font-size: larger;
        font-weight: bolder;
        align-items: center;
        justify-content: center;
        border: 1px solid #303030;;
        background-color: #ffffff14;
        border-radius: 0 40px 40px 0;
        cursor: pointer;
        height: 40px;
        width: 74px;
        margin: 0;
        @media (max-width: 540px) {
            font-size: 18px;
            height: 35px;
        }
    `;

    const VoiceSearch=styled.button`
        background-color: #ffffff14;
        color: #ffffff;
        margin: 0px 10px ;
        font-size: 23px;
        height: 43px;
        width:43px;
        padding: 12px;
        border-radius: 50%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        @media (max-width: 540px) {
            font-size: 18px;
            height: 35px;
            width:35px;
        }
    `;

    const Right=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 540px) {
        gap: 1px;
            }
    `;

    const Create=styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #ffffff;
        font-size: 24px;
        border: none;
        border-radius: 50%;
        padding: 7px;
        width: 37px;
        height: 37px;
        background: transparent;    
        &:hover{
        background-color: #ffffff14;
        }
        @media (max-width: 540px) {
            font-size: 18px;
        }
    `;

    const Notification=styled.button`
    position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #ffffff;
        font-size: 22px;
        border: none;
        border-radius: 50%;
        padding: 10px;
        width: 37px;
        height: 37px;
    background: transparent;    
        &:hover{
        background-color: #ffffff14;
        }
        @media (max-width: 540px) {
            font-size: 18px;
        }
    `;
    const NotificationNo=styled.span`
        cursor:pointer;
        position: absolute;
        top: 14px;
        width: 23px;
        display: flex;
        font-size: 13px;
        border-radius: 63px;
        color: #ffffff;
        background-color: red;
        height: 16px;
        align-items: center;
        justify-content: center;
        right: 100px;
        @media (max-width: 540px) {
            width: 16px;
            height: 11px;
            font-size: 9px;
            right: 61px;
        }
        @media (max-width: 980px) {
            top:11px;
            right: 84px;
        }
    `;

    const Profile=styled.button`
        cursor: pointer;
        border: none;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #808080;
        color: #ffffff;
        @media (max-width: 540px) {
            width: 28px;
            height: 28px;
        }
    `;


