import React from 'react'
import styled from 'styled-components';
import videos from '../../assets/videos.json'
import {useNavigate } from 'react-router-dom';
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiQueueLight } from "react-icons/pi";

const RelatedVideos = ({activeCategory}) => {
    const filteredVideos = activeCategory === 'All' ? videos : videos.filter(video => video.categories.includes(activeCategory));
    const navigate=useNavigate();
    const handleClick=(videoId,title,duration,thumbnail,channelName,views,uploaded,categories,video_url,comments,commentList)=>{
        navigate(`/video/${videoId}`,{state:{videoId:videoId, title:title ,duration:duration,thumbnail:thumbnail,channelName:channelName,views:views,uploaded:uploaded,categories:categories,video_url:video_url,comments:comments,commentList:commentList}})
    }
        return (
        <VideoContainer>
            {filteredVideos.map((video) => (
            <ThumbNail key={video.videoId} onClick={()=>{handleClick(video.videoId,video.title,video.duration,video.thumbnail,video.channelName,video.views,video.uploaded,video.categories,video.video_url,video.comments,video.commentList)}}>
                    <ThumbnailImgContainer>
                        <ThumbNailImg src={video.thumbnail} alt="Thumbnail"/>
                        <VideoHover>
                            <HoverIcon title="Watch later"><MdOutlineWatchLater /></HoverIcon>
                            <HoverIcon title="Add to Queue"><PiQueueLight /></HoverIcon>
                        </VideoHover>
                        <VideoDuration>{video.duration}</VideoDuration>
                    </ThumbnailImgContainer>
                    <VideoThumbnail>
                        <VideoTitleContainer>
                            <VideoTitle>{video.title}</VideoTitle>
                            <ChannelName>{video.channelName}</ChannelName>
                            <VideoViews>{video.views} Views . {video.uploaded}</VideoViews>
                        </VideoTitleContainer>
                        <ButtonCont>
                            <MenuIcon><HiDotsVertical /></MenuIcon>
                        </ButtonCont>
                    </VideoThumbnail>
            </ThumbNail>
        ))}
        </VideoContainer>
)
}

export default RelatedVideos

    const VideoContainer=styled.div`
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
        margin:20px 30px;
    }
        @media (max-width: 360px) {
        margin:20px 15px;
    }
    `;

    const ThumbNail=styled.div`
        width: 100%;
        display:flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        cursor:pointer;
        @media (max-width: 768px) {
            justify-content:stretch;
            margin-left: 20px;
    }
    @media (max-width: 360px) {
        margin-left: 10px;
    }
    `;

    const VideoHover=styled.div`
        position: absolute;
        gap: 3px;
        top: 5px;
        flex-direction: column;
        right: 5px;
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
        width: 168px;
        height:94px;
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
        border-radius: 5px;
    `;

    const HoverIcon=styled.button`
        background-color: #000000cc;
        border: none;
        color: #ffffff;
        font-size: 20px;
        height: 22px;
        width: 22px;
        border-radius: 2px;
        padding: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const ButtonCont=styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
    `;

    const MenuIcon=styled.button`
        display: none;
        background-color  :transparent ;
        color: #f1f1f1;
        font-size: 20px;
        border: none;
        position: absolute;
        top:0;
        right:0;
    `;

    const  VideoThumbnail = styled.div`
        position: relative;
        margin: 10px;
        width:52%;
        display: flex;
        justify-content: space-between;
        align-items:self-start;
        &:hover{
            ${MenuIcon}{
                display: block;
            }
        }
`;

    const VideoTitleContainer=styled.div`
        @media (max-width: 768px) {
                    margin-left: 20px;
            }
            @media (max-width: 360px) {
                margin-left: 5px;
    }
    `;

    const VideoTitle=styled.h6`
        font-size: 17px;
        font-weight :300;
        color:#f1f1f1;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (max-width: 360px) {
        font-size:15px;
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

   

