    import React from 'react';
    import Header from './Header';
    import styled from 'styled-components';
    import NavMenu from './NavMenu.jsx';
    import Categories from './categories.jsx'
    import Videos from './Videos.jsx'

const Home = () => {
    return (
        <HomeContainer>
            <Header/>
            <YoutubeHome>
                <YoutubeHomeLeft>
                    <NavMenu/>
                </YoutubeHomeLeft>
                <YoutubeHomeRight>
                    <Categories/>
                    <Videos/>
                </YoutubeHomeRight>
            </YoutubeHome>
        </HomeContainer>
    )}

export default Home

    const HomeContainer=styled.section`
        display: block;
        background: #000;
    `;
    const YoutubeHome=styled.section`
        display: flex;
    `;
    const YoutubeHomeLeft=styled.section`
        position: fixed;
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
                background: #000; 
            }
        
            &::-webkit-scrollbar-thumb {
                background: #555; 
                border-radius: 10px;
                height: 50px;
            }
        `;
    const YoutubeHomeRight=styled.section`
        width:82%;
        margin-left:18% ;
`;
