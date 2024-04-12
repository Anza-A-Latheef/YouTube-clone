import React from 'react'
import styled from 'styled-components'
import { BiLike, BiDislike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const VideoDetail = ({title,thumbnail,channelName,views,uploaded,video_url}) => {
  return (
        <VideoDetailContainer>
            <VideoFrame>
                <Frame src={video_url} title="YouTube video player" allow="autoplay; encrypted-media" autoPlay allowFullScreen></Frame>
            </VideoFrame>
            <VideoFrameTitle>{title}</VideoFrameTitle>
            <ChannelDetail>
                <ProfileDiv>
                    <ChannelProfile>
                        <ProfileImg src={thumbnail} alt='channelprofile'/>
                    </ChannelProfile>
                    <ChannelName>
                        <ChannelTitle>{channelName}</ChannelTitle>
                        <Subscribers>{views} Subscribers</Subscribers>
                    </ChannelName>
                    <SubscribeButton>Subscribe</SubscribeButton>
                </ProfileDiv>
                <ProfileOptions>
                    <LikeOptions>
                        <LikeButton><BiLike size="25px" /> 39</LikeButton>
                        <DislikeButton><BiDislike size="25px" /></DislikeButton>
                    </LikeOptions>
                    <ShareButton><PiShareFat size="25px" /> Share</ShareButton>
                    <DownloadButton><HiDownload size="25px" /> Download</DownloadButton>
                    <MenuButton><BsThreeDots size="25px" /></MenuButton>
                </ProfileOptions>
            </ChannelDetail>
            <DescriptionBox>
                <ViewsNumber>{views} views  {uploaded} #family #entertainment #education #{channelName} <ChannelTagSpan>#family #entertainment #education #{channelName}</ChannelTagSpan></ViewsNumber>
                <ChannelDescription>Are you ready to dive into new world of excitement.The channel meant for  entertainment purpose.</ChannelDescription>
                <More>...more</More>
            </DescriptionBox>
        </VideoDetailContainer>
  )
}

export default VideoDetail

const VideoDetailContainer=styled.div`
    display: flex;
    flex-direction: column;
`;

const VideoFrame=styled.div`
    width: 100%;
    height: 480px;
`;

const Frame=styled.iframe`
    width:100%;
    height: 100%;
    border-radius: 20px;
    border: 0;
`;

const VideoFrameTitle=styled.h3`
    color: #ffffff;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 22px;
    line-height: 2rem;
    font-weight: 600;
    overflow: hidden;
    display: block;
    white-space: normal;
    margin-top: 10px;
`;

const ChannelDetail=styled.div`
    display:flex;
    justify-content: space-between;
`;

const ProfileDiv=styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const ChannelProfile=styled.div`
    width:40px;
    height:40px;
    cursor: pointer;
`;

const ProfileImg=styled.img`
    width:100%;
    height:100%;
    border-radius: 50%;
`;

const ChannelName=styled.div`
    display: flex;
    flex-direction: column;
`;

const ChannelTitle=styled.h6`
    color: #ffffff;
    font-weight:600;
    font-size: 16px;
    cursor: pointer;
`;

const Subscribers=styled.p`
    color: #aaa;
    font-size: 12px;
`;

const SubscribeButton=styled.button`
    border-radius: 28px;
    width: max-content;
    padding:7px 15px;
    background-color: #fff;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    border:none;
`;

const ProfileOptions=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LikeOptions=styled.div`
    background-color: #ffffff1a;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 20px;
    padding: 4px 10px;
    cursor :pointer;
    &:hover{
        background-color: #c0b5b567;
    }
`;

const LikeButton=styled.button`
    padding-right: 15px;
    font-size: 13px;
    color: #ffffff;
    background-color: transparent;
    border: none;
    height: min-content;
    display: flex;
    gap: 7px;
    align-items: center;
    border-right: 2px solid #aaa;
  
`;

const DislikeButton=styled.button`
    color:#ffffff;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 15px;
    padding-left: 10px;
`;

const ShareButton=styled.button`
    background-color: #ffffff1a;
    color:#ffffff;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 20px;
    display: flex;
    align-items:center;
    &:hover{
        background-color: #c0b5b567;
    }
`;

const DownloadButton=styled.button`
    padding: 5px 10px;
    background-color: #ffffff1a;
    color:#ffffff;
    border: none;
    font-size: 13px;
    border-radius:20px;
    display:flex;
    align-items:center;
    cursor: pointer;
    &:hover{
        background-color: #c0b5b567;
    }
`;

const MenuButton=styled.button`
    padding: 5px;
    background-color: #ffffff1a;
    color:#ffffff;
    border: none;
    font-size: 13px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    &:hover{
        background-color: #c0b5b567;
    }
`;


const DescriptionBox=styled.div`
    margin-top: 20px;
    background-color:#ffffff1a;
    padding: 10px;
    border-radius: 10px;
`;

const ViewsNumber=styled.p`
    color:#ffffff;
    font-size: 13px;
    font-weight: 600;
`;

const ChannelTagSpan=styled.span`
    color:#aaa
`;
    
const ChannelDescription=styled.p`
    font-size: 13px;
    color:#ffffff;
`;

const More=styled.p`
    font-size: 13px;
    font-weight: 600;
    color:#ffffff;
`;

