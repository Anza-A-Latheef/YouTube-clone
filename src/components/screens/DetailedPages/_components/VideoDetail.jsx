import React ,{useState} from 'react'
import styled from 'styled-components'
import { BiLike, BiDislike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const VideoDetail = ({title,thumbnail,channelName,views,uploaded,video_url,videoLike}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(videoLike);
    const [subscribe, setSubscribe] = useState("Subscribe");
    const [subscribed,setSubscribed] = useState(false);
    const [disliked,setDisliked] = useState(false)

    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };

    const subscribeFunction = () =>{
        if(!subscribed){
            setSubscribed(true);
            setSubscribe("Subscribed")
        }
        else{
            setSubscribed(false);
            setSubscribe("Subscribe")
        }
    }

    const handleLikeClick = () => {
        if (!liked) {
            setLiked(true);
            setDisliked(false);
            setLikeCount(likeCount + 1);
        } else {
            setLiked(false);
            setLikeCount(likeCount - 1);
        }
    };

    const handleDislikeClick = () =>{
        if(!disliked){
            setDisliked(true);
            setLikeCount(videoLike);
            setLiked(false);
        }
        else{
            setDisliked(false);
        }
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
            return `${daysDifference} days ago`;
        } else if (daysDifference < 14) {
            return `1 week ago`;
        } else if (daysDifference < 21) {
            return `2 weeks ago`;
        } else {
            return `3 weeks ago`;
        }
    };

    const formattedUploadedTime = getFormattedTime(uploaded);
    
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
                    <SubscribeButton onClick={subscribeFunction} subscribed={subscribed}>{subscribe}</SubscribeButton>
                </ProfileDiv>
                <ProfileOptions>
                    <LikeOptions>
                        <LikeButton onClick={handleLikeClick} liked={liked}><BiLike size="25px" /> {likeCount}</LikeButton>
                        <DislikeButton onClick={handleDislikeClick}  disliked={disliked}><BiDislike size="25px" /></DislikeButton>
                    </LikeOptions>
                    <ShareButton><PiShareFat size="25px" /> Share</ShareButton>
                    <DownloadButton><HiDownload size="25px" /> Download</DownloadButton>
                    <MenuButton><BsThreeDots size="25px" /></MenuButton>
                </ProfileOptions>
            </ChannelDetail>
            <DescriptionBox>
                <ViewsNumber>{views} views  {formattedUploadedTime} #family #entertainment #education #{channelName} <ChannelTagSpan>#family #entertainment #education #{channelName}</ChannelTagSpan></ViewsNumber>
                {showFullDescription ? (
          <>
            <ChannelDescription>
              Are you ready to dive into the new world of excitement. The channel meant for entertainment purpose.No one meant for hurted in this video.if you like the video please like, subscribe and share with your friends.
            </ChannelDescription>
          </>
        ) : (
          <>
            <ChannelDescription>
              Are you ready to dive into the new world of excitement. The channel meant for entertainment purpose.
            </ChannelDescription>
            <More onClick={toggleDescription}>...more</More>
          </>
        )}
         </DescriptionBox>
        </VideoDetailContainer>
  )
}

export default VideoDetail

const VideoDetailContainer=styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        margin-left: 30px;
    }
    @media (max-width: 768px) {
        margin:0px 30px;
    }
`;

const VideoFrame=styled.div`
    width: 100%;
    height: 480px;
    @media (max-width: 1024px) {
        height: 400px;
    }
    @media (max-width: 360px) {
        height: 250px;
    }
    @media (max-width: 320px) {
        height: 200px;
    }
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
    @media (max-width: 360px) {
        font-size: 20px;
    }
`;

const ChannelDetail=styled.div`
    display:flex;
    justify-content: space-between;
    @media (max-width: 360px) {
        margin-top: 15px;
    }
`;

const ProfileDiv=styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    @media (max-width: 1024px) {
        gap: 6px;
    }
    @media (max-width: 480px) {
        gap: 15px;
    }
`;

const ChannelProfile=styled.div`
    width:40px;
    height:40px;
    cursor: pointer;
    @media (max-width: 1024px) {
        width:35px;
        height:35px;
    }
    @media (max-width: 480px) {
        width:40px;
        height:40px;
    }
    @media (max-width: 320px) {
        width:35px;
        height:35px;
    }
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
    @media (max-width: 1024px) {
        font-size: 15px;
    }
    @media (max-width: 480px) {
        font-size: 16px;
    }
    @media (max-width: 320px) {
        font-size: 15px;
    }
`;

const Subscribers=styled.p`
    color: #aaa;
    font-size: 12px;
`;

const SubscribeButton=styled.button`
    border-radius: 28px;
    width: max-content;
    padding:7px 15px;
    /* background-color: #fff; */
    cursor: pointer;
    background-color: ${({ subscribed }) => subscribed ? '#aaa' : '#fff'};
    color: ${({ subscribed }) => subscribed ? '#fff' : '#000'};
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    border:none;
    @media (max-width: 1024px) {
       padding: 6px 13px;
       margin-left:0px ;
    }
`;

const ProfileOptions=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 1024px) {
       gap: 5px;
    }
    @media (max-width: 480px) {
        display: none;
    }
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
    @media (max-width: 1024px) {

}
`;

const LikeButton=styled.button`
    padding-right: 15px;
    font-size: 13px;
    color: ${({ liked }) => liked ? '#0073e6' : '#ffffff'};
    background-color: transparent;
    border: none;
    fill: #ffffff;
    height: min-content;
    display: flex;
    gap: 7px;
    align-items: center;
    cursor: pointer;
    border-right: 2px solid #aaa;
  
`;

const DislikeButton=styled.button`
    color: ${({ disliked }) => disliked ? '#0073e6' : '#ffffff'};
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
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
    @media (max-width: 1024px) {
        display: none;
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
    cursor: pointer;
`;

