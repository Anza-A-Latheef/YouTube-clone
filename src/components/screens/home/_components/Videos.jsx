import React, {useContext} from 'react';
import styled from 'styled-components';
import { BiSolidVolumeMute } from 'react-icons/bi';
import { PiSubtitlesFill } from 'react-icons/pi';
import videos from '../../../../assets/videos.json';
import { useNavigate } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { SearchContext } from '../../../general/includes/SearchContext';

const Videos = ({activeCategory}) => {
    // const { searchQuery } = useContext(SearchContext);
    const { searchQuery, isSearchActive } = useContext(SearchContext);
    
    const navigate = useNavigate();

    const handleClick = (video) => {
        navigate(`/video/${video.videoId}`, { state: { ...video } });
    };

    const getFormattedTime = (date) => {
        const daysDifference = differenceInDays(new Date(), new Date(date));
        const monthsDifference = differenceInMonths(new Date(), new Date(date));
        const yearsDifference = differenceInYears(new Date(), new Date(date));

        if (yearsDifference >= 1) {
            return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
        } else if (monthsDifference >= 1) {
            return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
        } else if (daysDifference < 7) {
            return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
        } else if (daysDifference < 14) {
            return `1 week ago`;
        } else if (daysDifference < 21) {
            return `2 weeks ago`;
        } else {
            return `3 weeks ago`;
        }
    };

    const filteredVideos = isSearchActive 
    ? videos.filter(video => {
        const matchesCategory = activeCategory === 'All' || video.categories.includes(activeCategory);
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    })
    : videos.filter(video => activeCategory === 'All' || video.categories.includes(activeCategory));

    return (
        <VideoContainer>
            {filteredVideos.map((video) => (
                <ThumbNail key={video.videoId} onClick={() => handleClick(video)}>
                    <ThumbnailImgContainer>
                        <ThumbNailImg src={video.thumbnail} alt="Thumbnail" />
                        <VideoHover>
                            <VolumeIcon><BiSolidVolumeMute /></VolumeIcon>
                            <SubtitleIcon><PiSubtitlesFill /></SubtitleIcon>
                        </VideoHover>
                        <VideoDuration>{video.duration}</VideoDuration>
                    </ThumbnailImgContainer>
                    <VideoThumbnail>
                        <ChannelProfile>
                            <ProfileImg src={video.thumbnail} />
                        </ChannelProfile>
                        <VideoTitleContainer>
                            <VideoTitle>{video.title}</VideoTitle>
                            <ChannelName>{video.channelName}</ChannelName>
                            <VideoViews>{video.views} Views . {getFormattedTime(video.uploaded)}</VideoViews>
                        </VideoTitleContainer>
                        <MenuIcon><HiDotsVertical /></MenuIcon>
                    </VideoThumbnail>
                </ThumbNail>
            ))}
        </VideoContainer>
    );
}

export default Videos;

    const VideoContainer=styled.div`
        margin-top: 40px;
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 3fr 3fr;
        overflow: hidden;
        /* background-color: black; */

        @media (max-width: 1080px) {
            grid-template-columns: 2fr 2fr ;
            }
        @media (max-width: 1024px) {
            grid-template-columns: 2fr 2fr ;
            }
        @media (max-width: 980px) {
            grid-template-columns: 3fr 3fr 3fr ;
            }
        @media (max-width: 768px) {
            grid-template-columns: 2fr 2fr ;
            }
        @media (max-width: 540px) {
            display:flex;
            flex-direction: column;
            align-items: center;
            }
         `;

    const ThumbNail=styled.div`
        margin-bottom: 40px;
        /* background-color: black; */

    `;

    const VideoHover=styled.div`
        background-color:#000000cc;
        align-items: center;
        justify-content: space-between;
        padding: 4px 5px;
        width: 70px;
        border-radius: 4px;
        margin: 5px 5px 0px 0px;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    `;

    const VideoDuration=styled.p`
        background-color: #000000cc;
        padding: 3px 4px;
        border-radius: 4px;
        font-weight:500;
        line-height:1.2rem;
        letter-spacing: .5px;
        font-size: 13px;
        margin: 0px 5px 5px 0px;
        position: absolute;
        color: #ffffff;
        bottom: 0;
        right: 0;
        `;

    const ThumbnailImgContainer=styled.div`
        border-radius: 20px;
        width: 343px;
        height:193px;
        position:relative;

        &:hover{
            ${VideoHover} {
                display: flex;
            }
            ${VideoDuration} {
                display: none;
            }
        }
        @media (max-width: 980px) {
        width: 280px;
        height: 163px;
    }
        @media (max-width: 768px) {
            width: 343px;
            height:193px;
    }
        @media (max-width: 768px) {
            width: 280px;
            height: 163px;
    }
    @media (max-width: 540px) {
        width: 428px;
        height: 237px;
    }
    @media (max-width: 480px) {
            width: 343px;
            height:193px;
    }
    @media (max-width: 360px) {
            width: 323px;
            height:173px;
    }
    @media (max-width: 320px) {
            width: 280px;
            height: 163px;
    }
    `;

    const ThumbNailImg=styled.img`
        width:100%;
        height:100%;
        border-radius: 10px;
    `;

    const VolumeIcon=styled.button`
        color: #ffffff;
        border: none;
        border-right: 1px solid gainsboro;
        background-color: transparent;
        font-size: 18px;
        padding-right: 11px;
        height: 20px;
    `;

    const SubtitleIcon=styled.button`
        height: 20px;
        border: none;
        color: #ffffff;
        background-color: transparent;
        font-size: 18px;
    `;

    const MenuIcon=styled.button`
        display: none;
        position: absolute;
        top: 0;
        right: 18px;
        background-color  :transparent ;
        color: #f1f1f1;
        font-size: 20px;
        border: none;
    `;

    const  VideoThumbnail = styled.div`
        position: relative;
        margin: 10px;
        display: flex;
        gap: 20px;
        &:hover{
            ${MenuIcon}{
                display: block;
            }
        }
        @media (max-width: 980px) {
            margin: 10px 0px;
            gap: 10px;
        }
        @media (max-width: 786px) {
            margin: 10px;
            gap: 20px;
        }
        @media (max-width: 640px) {
            margin: 10px 0px;
            gap: 10px;
        }
        @media (max-width: 480px) {
            margin: 10px;
            gap: 20px;
        }
        @media (max-width: 320px) {
            margin: 10px 0px;
            gap: 10px;
        }
    `;

    const ChannelProfile=styled.div`
        width:36px;
        height:36px;
    `;

    const ProfileImg=styled.img`
        width:100%;
        height:100%;
        border-radius: 50%;
    `;

    const VideoTitleContainer=styled.div`
        max-width: 263px;
        @media (max-width: 540px) {
            max-width: 350px;
        }
    `;

    const VideoTitle=styled.h6`
        font-size: 17px;
        font-weight :300;
        color:#f1f1f1;
        @media (max-width: 320px) {
            font-size: 15px;
        }
        `;

    const ChannelName=styled.p`
        color:#aaa;
        font-size: 13px;
    `;
        
    const VideoViews = styled.p`
            font-size: 12px;
            color: #aaa;
            font-weight: bold;
    `;

   