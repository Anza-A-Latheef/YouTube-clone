import React from 'react';
import styled from 'styled-components';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { TbUserSquare } from "react-icons/tb";
import { MdOutlineSubscriptions, MdOutlineSmartDisplay, MdOutlineWatchLater, MdHistory, MdOutlineShoppingBag, MdOutlinePodcasts, MdOutlinedFlag, MdOutlineFeedback } from "react-icons/md";
import { FaChevronRight, FaChevronDown, FaFire ,FaRegCopyright} from "react-icons/fa";
import { PiMusicNoteThin, PiFilmSlateBold, PiDress } from "react-icons/pi";
import { IoRadioSharp, IoTrophyOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { BsLightbulb } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from 'react-icons/io';
import videos from '../../assets/videos.json'


const NavMenu = () => {
return (
    <YouTubeItemCont>
        <YoutubeItems>
            <YouTubeItemUl>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><GoHomeFill /></YoutubeLeftIcons>
                    <NavMenuP>Home</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><SiYoutubeshorts /></YoutubeLeftIcons>
                    <NavMenuP>Shorts</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlineSubscriptions /></YoutubeLeftIcons>
                    <NavMenuP>Subscriptions</NavMenuP>
                </YouTubeItemLi>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeItems>
            <YouHead>You <FaChevronRight /></YouHead>
            <YouTubeItemUl>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><TbUserSquare /></YoutubeLeftIcons>
                    <NavMenuP>Your channel</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdHistory /></YoutubeLeftIcons>
                    <NavMenuP>History</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlineSmartDisplay /></YoutubeLeftIcons>
                    <NavMenuP>Your videos</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlineWatchLater /></YoutubeLeftIcons>
                    <NavMenuP>Watch Later</NavMenuP>
                </YouTubeItemLi>
                <ShowMoreButton><FaChevronDown /> Show more</ShowMoreButton>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeItems>
            <YouHead>Subscriptions</YouHead>
            <YouTubeItemUl>
                {videos.slice(0,6).map((video, index) => (
                    <YouTubeItemLi key={index}>
                        <MoreLogo><MoreLogoImg src={video.thumbnail} alt="Profilepic"/></MoreLogo>
                        <NavMenuP>{video.channelName}</NavMenuP>
                    </YouTubeItemLi>
                ))}
                <ShowMoreButton><FaChevronDown /> Show more</ShowMoreButton>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeItems>
            <YouHead>Explore</YouHead>
            <YouTubeItemUl>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><FaFire /></YoutubeLeftIcons>
                    <NavMenuP>Trending</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlineShoppingBag /></YoutubeLeftIcons>
                    <NavMenuP>Shopping</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><PiMusicNoteThin /></YoutubeLeftIcons>
                    <NavMenuP>Music</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><PiFilmSlateBold /></YoutubeLeftIcons>
                    <NavMenuP>Films</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><IoRadioSharp /></YoutubeLeftIcons>
                    <NavMenuP>Live</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><SiYoutubegaming /></YoutubeLeftIcons>
                    <NavMenuP>Gaming</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><ImNewspaper /></YoutubeLeftIcons>
                    <NavMenuP>News</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><IoTrophyOutline /></YoutubeLeftIcons>
                    <NavMenuP>Sport</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><BsLightbulb /></YoutubeLeftIcons>
                    <NavMenuP>Courses</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><PiDress /></YoutubeLeftIcons>
                    <NavMenuP>Fashion & beauty</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlinePodcasts /></YoutubeLeftIcons>
                    <NavMenuP>Podcasts</NavMenuP>
                </YouTubeItemLi>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeItems>
            <YouHead>More from YouTube</YouHead>
            <YouTubeItemUl>
                <YouTubeItemLi>
                    <MoreLogo><MoreLogoImg src={require("../../assets/images/youtubelogo.png")} alt="asadf"/></MoreLogo>

                    <NavMenuP>YouTube Premium</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <MoreLogo><MoreLogoImg src={require("../../assets/images/youtubelogo.png")} alt="asadf"/></MoreLogo>

                    <NavMenuP>YouTube Studio</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <MoreLogo><MoreLogoImg src={require("../../assets/images/youtubelogo.png")} alt="asadf"/></MoreLogo>

                    <NavMenuP>YouTube Music</NavMenuP>
                </YouTubeItemLi>
                <YouTubeItemLi>
                    <MoreLogo><MoreLogoImg src={require("../../assets/images/youtubelogo.png")} alt="asadf"/></MoreLogo>

                    <NavMenuP>YouTube Kids</NavMenuP>
                </YouTubeItemLi>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeItems>
            <YouTubeItemUl>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><CiSettings /></YoutubeLeftIcons>
                    <NavMenuP>Settings</NavMenuP>
                    </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlinedFlag /></YoutubeLeftIcons>
                    <NavMenuP>Report history</NavMenuP>
                    </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><IoMdHelpCircleOutline /></YoutubeLeftIcons>
                    <NavMenuP>Help</NavMenuP>
                    </YouTubeItemLi>
                <YouTubeItemLi>
                    <YoutubeLeftIcons><MdOutlineFeedback /></YoutubeLeftIcons>
                    <NavMenuP>Send feedback</NavMenuP>
                    </YouTubeItemLi>
            </YouTubeItemUl>
        </YoutubeItems>
        <YoutubeLinks>
            <YoutubeLinksUl>
                <YoutubeLinksLi>About</YoutubeLinksLi>
                <YoutubeLinksLi>Press</YoutubeLinksLi>
                <YoutubeLinksLi>Copyright</YoutubeLinksLi>
                <YoutubeLinksLi>Contact us</YoutubeLinksLi>
                <YoutubeLinksLi>Creator</YoutubeLinksLi>
                <YoutubeLinksLi>Advertise</YoutubeLinksLi>
                <YoutubeLinksLi>Developers</YoutubeLinksLi>
            </YoutubeLinksUl>
            <YoutubeLinksUl>
                <YoutubeLinksLi>Terms</YoutubeLinksLi>
                <YoutubeLinksLi>Privacy</YoutubeLinksLi>
                <YoutubeLinksLi>Policy & Safety</YoutubeLinksLi>
                <YoutubeLinksLi>How YouTube works</YoutubeLinksLi>
                <YoutubeLinksLi>Test new features</YoutubeLinksLi>
            </YoutubeLinksUl>
            <Copyright><FaRegCopyright /> 2024 Google LLC</Copyright>
        </YoutubeLinks>
    </YouTubeItemCont>
)}
export default NavMenu

// styling area

const YouTubeItemCont=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const YoutubeItems=styled.div`
    margin-top: 10px;
    width: 100%;
`;

const YouTubeItemUl=styled.div`
        display: flex;
        flex-direction: column;
        margin: 0px 20px;
        border-bottom:1px solid #ffffff33;
`;

const YouTubeItemLi=styled.li`
    margin: 5px;
    padding: 0px 10px;
    padding-top: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width:100%;
    &:hover{
        background-color: #ffffff14;
    }
`;

const YoutubeLeftIcons=styled.p`
    color: #f1f1f1;
    font-size: 23px;
    line-height: 2rem;
`;

const NavMenuP=styled.p`
    cursor:pointer;
    color: #f1f1f1;
    overflow: hidden;
    white-space: nowrap;
    text-align:left ;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 15px;
    line-height: 2rem;
    font-weight: 400;
    width: 125px;
    `;

const YouHead=styled.div`
    color: #f1f1f1;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 19px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 33px;
    line-height: 2.2rem;
    font-weight: 500;
`;

const ShowMoreButton=styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #f1f1f1;
    overflow: hidden;
    white-space: nowrap;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 15px;
    line-height: 2rem;
    font-weight: 400;
    width: 90%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    margin-left: 15px;
    padding: 0px 10px;
    gap: 20px;
    &:hover{
        background-color: #ffffff14;
    }
`;

const MoreLogo=styled.div`
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border-radius: 50%;
    border: 1px solid #ffffff;
    `;
const MoreLogoImg=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;  

const YoutubeLinks=styled.div`
display: flex;
flex-direction: column;
`;

const YoutubeLinksUl=styled.ul`
    display: flex;
    margin-top: 20px;
    margin-left:20px;
    flex-wrap: wrap;
    gap: 8px;
`;

const YoutubeLinksLi=styled.li`
    display: inline-block !important;
    text-decoration: none;
    color: #aaaaaa;
    font-size: 12px;
    font-weight: 500;
`;

const Copyright=styled.p`
    display:flex;
    gap:6px;
    margin: 20px 0 0 20px;
    align-items:center;
    text-decoration: none;
    color: #aaaaaa;
    font-size: 12px;
    font-weight: 500;
`;
