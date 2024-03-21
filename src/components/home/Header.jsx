import React from 'react'
import styled from 'styled-components'
import youtubeLogo from '../../assets/images/youtube.jpg'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";

const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <LogoContainer>
          <LogoTag>
            <LogoImage src={youtubeLogo} alt='Youtube-Logo'/>
          </LogoTag>
        </LogoContainer>
        <SearchTab>
          <SearchInput type="text" placeholder='Search'/>
          <SearchIcon><CiSearch /></SearchIcon>
          <VoiceSearch><FaMicrophone /></VoiceSearch>
        </SearchTab>
      </Left>
      <Right>
        <Create><RiVideoAddFill /></Create>
        <Notification><GoBellFill /></Notification>
        <Profile>M</Profile>
      </Right>
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
  height: max-content;
`;

const Left=styled.div`
display: flex;
align-items: center;
`;

const LogoContainer=styled.h1`
  width: 100px;
  height: 20px;
  `;

const LogoTag=styled.a`
  width: 100%;
  background-color: transparent;
  height: 100%;
  background: #000;
  `;

const LogoImage=styled.img`
  width: 100%;
  height: 100%;
  `;

const SearchTab=styled.div`

`;

const SearchInput=styled.input`

`;

const SearchIcon=styled.div`

`;

const VoiceSearch=styled.div`

`;

const Right=styled.div`

`;

const Create=styled.div`

`;

const Notification=styled.div`

`;

const Profile=styled.div`

`;


