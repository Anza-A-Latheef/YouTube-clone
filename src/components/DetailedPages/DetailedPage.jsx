import React from 'react';
import styled from 'styled-components';
import { useLocation} from 'react-router-dom';
import Header from '../home/Header'
import Comments from '../DetailedPages/Comments'
import VideoDetail from '../DetailedPages/VideoDetail'
import Related from '../DetailedPages/Related'

const DetailedPage = () => {
const location=useLocation();
const {videoId,title,duration,thumbnail,channelName,views,uploaded,categories,video_url,comments,commentList} =location.state || {};
    return (
        <DetailedPageContainer>
            <Header/>
            <DetailPageBottom>
                <DetailedPageLeft>
                    <VideoDetail videoId={videoId} duration={duration} views={views} video_url={video_url} uploaded={uploaded} categories={categories} title={title} thumbnail={thumbnail} channelName={channelName} comments={comments} commentList={commentList}/>
                    <Comments videoId={videoId} views={views} uploaded={uploaded} comments={comments} commentList={commentList} thumbnail={thumbnail}/>
                </DetailedPageLeft>
                <DetailedPageRight>
                    <Related/>
                </DetailedPageRight>
            </DetailPageBottom>
        </DetailedPageContainer>
    );
}
export default DetailedPage;

const DetailedPageContainer=styled.div`
    background-color: #0f0f0f;
    height: 100vh;
`;

const DetailPageBottom=styled.div`
    margin: 25px auto;
    max-width: 1250px;
    display: flex;
    gap: 30px;
    height:88vh;
    `;
const DetailedPageLeft=styled.div`
    width:67%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none; 
    }
    `;

const DetailedPageRight=styled.div`
    width:33%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;