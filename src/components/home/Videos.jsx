    import React from 'react'
    import styled from 'styled-components';
    import { BiSolidVolumeMute } from "react-icons/bi";
    import { PiSubtitlesFill } from "react-icons/pi";
    import videos from '../../assets/videos.json'
    import { Link } from 'react-router-dom';
    import { HiDotsVertical } from "react-icons/hi";

    const Videos = () => {
    return (
        <VideoContainer>
        {videos.map((video, index) => (
            <ThumbNail key={index}>
                <Link>
                    <ThumbnailImgContainer>
                        <ThumbNailImg src={video.thumbnail} alt="Thumbnail"/>
                        <VideoHover>
                            <VolumeIcon><BiSolidVolumeMute /></VolumeIcon>
                            <SubtitleIcon><PiSubtitlesFill /></SubtitleIcon>
                        </VideoHover>
                        <VideoDuration>{video.duration}</VideoDuration>
                    </ThumbnailImgContainer>
                    <VideoThumbnail>
                        <ChannelProfile>
                            <ProfileImg src={video.thumbnail}/>
                        </ChannelProfile>
                        <VideoTitleContainer>
                            <VideoTitle>{video.title}</VideoTitle>
                            <ChannelName>{video.channelName}</ChannelName>
                            <VideoViews>{video.views} . {video.uploaded}</VideoViews>
                        </VideoTitleContainer>
                        <MenuIcon><HiDotsVertical /></MenuIcon>
                    </VideoThumbnail>
                </Link>
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
    `;

    const ThumbNail=styled.div`
        margin-bottom: 40px;
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
    `;

    const VideoTitle=styled.h6`
        font-size: 16px;
        color:#f1f1f1;
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

   