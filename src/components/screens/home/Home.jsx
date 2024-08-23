import React, {useState} from 'react';
import Header from '../../general/includes/Header.jsx';
import styled from 'styled-components';
import NavMenu from '../../general/includes/NavMenu.jsx';
import Categories from '../home/_components/categories.jsx';
import Videos from '../home/_components/Videos.jsx';

const Home = () => {
    const [isYouTubeHomeLeftOpen, setIsYouTubeHomeLeftOpen] = useState(false);

    const toggleYouTubeHomeLeft = () => {
        setIsYouTubeHomeLeftOpen(prevState => !prevState);
    };

    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    return (
        <HomeContainer>
            <Header toggleYouTubeHomeLeft={toggleYouTubeHomeLeft} handleSearch={handleSearch}/>
            <YoutubeHome>
                <YoutubeHomeLeft isVisible={isYouTubeHomeLeftOpen}>
                    <NavMenu/>
                </YoutubeHomeLeft>
                <YoutubeHomeRight>
                    <Categories/>
                </YoutubeHomeRight>
            </YoutubeHome>
        </HomeContainer>
    )}

export default Home

    const HomeContainer=styled.section`
        display: block;
        background-color: #0f0f0f
    `;
    const YoutubeHome=styled.section`
        display: flex;
    `;
    const YoutubeHomeLeft=styled.section`
        z-index: 11;
        position: fixed;
        background-color: #0f0f0f;
        top: 45px;
        left: 0;
        height:100vh;
        overflow: hidden;
        scrollbar-color: transparent;
        width: 16.9%;
        overflow-y: auto;
        scrollbar-color: #e7e7e7;
        display:flex;    
        &:hover{
        }
            &::-webkit-scrollbar {
                width: 7px;
            }
            &::-webkit-scrollbar-track {
                background-color: #0f0f0f
            }
            &::-webkit-scrollbar-thumb {
                background: #555; 
                border-radius: 10px;
                height: 50px;
            }
            @media (max-width: 1100px) {
                width: 20%;
            }
            @media (max-width: 1024px) {
                width: 21%;
            }
            @media (max-width: 980px) {
                width: 25%;
                display: ${props => props.isVisible ? 'block' : 'none'};
            }
            @media (max-width: 768px) {
                width: 32%;
            }
            @media (max-width: 640px) {
                width: 40%;
            }
            @media (max-width: 540px) {
                width: 45%;
            }
            @media (max-width: 480px) {
                width: 50%;
            }
            @media (max-width: 360px) {
                width: 65%;
            }
            @media (max-width: 320px) {
                width: 70%;
            }
        `;
    const YoutubeHomeRight=styled.section`
        width:82%;
        margin-left:18% ;
        min-height: 92vh;

        @media (max-width: 1100px) {
            margin-left:23% ;
            width: 75%;
        }
        @media (max-width: 1024px) {
            margin-left:23% ;
                width: 75%;
            }
            @media (max-width: 980px) {
                width: 95%;
                margin:2% 5%;
            }
            @media (max-width: 480px) {
                margin:3%;
            }
`;
