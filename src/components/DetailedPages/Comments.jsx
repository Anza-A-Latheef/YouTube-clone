import React from 'react';
import styled from 'styled-components';
import { MdSort } from "react-icons/md";
import { BiLike ,BiDislike} from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Comments = ({thumbnail,comments,commentList}) => {
    const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'];

return (
    <CommentsContainer>
        <CommentsHead>
            <CommentCount>{comments} Comments</CommentCount>
            <SortOption>
                <SortIcon><MdSort size={25}/></SortIcon>
                <Sort>Sort by</Sort>
            </SortOption>
        </CommentsHead>
        {commentList.map((comment, index) => (
        <CommentsArea key={index}>
            <UserProfile color={colors[Math.floor(Math.random() * colors.length)]}>{comment.user.charAt(0)}</UserProfile>
            <CommentDetails>
                <UserName>@{comment.user} <UserNameSpan>{comment.posted}</UserNameSpan></UserName>
                <Comment>{comment.comment}</Comment>
                <LikeOption>
                    <LikeIcon><BiLike size={22} color='#f1f1f1'/> {comment.like}</LikeIcon>
                    <LikeIcon><BiDislike size={22} color='#f1f1f1'/></LikeIcon>
                    <ChannelLiked>
                        <ChannelDp><ThumbNailImg src={thumbnail}/></ChannelDp>
                        <LikeHeart><FcLike /></LikeHeart>
                    </ChannelLiked>
                    <Reply>Reply</Reply>
                </LikeOption>
            </CommentDetails>
        </CommentsArea>
        ))}
    </CommentsContainer>
)
}

export default Comments

const CommentsContainer=styled.div`
    display:flex;
    flex-direction:column;
    @media (max-width: 1024px) {
        margin-left: 20px;
        }
`;

const CommentsHead=styled.div`
    display:flex;
    border-bottom: 1px solid #333333;
    padding: 20px 0px;
    margin-bottom: 20px;
    `;

const CommentCount=styled.h5`
    color:#f1f1f1;
    font-size: 20px;
    `;

const SortOption=styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    `;

const SortIcon=styled.div`
    color: #f1f1f1;
    font-size: 20px;
    display:flex;
    justify-content: center;
    `;

const Sort=styled.p`
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 500;
    `;

const CommentsArea=styled.div`
    display: flex;
    align-items: normal;
    gap:10px;
    padding-top: 20px;
`;

const UserProfile=styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f1f1f1;
    background-color: ${(props) => props.color};
    width: 35px;
    height: 35px;
`;

const CommentDetails=styled.div`
    display:flex;
    flex-direction: column;
    gap: 7px;
`;

const UserName=styled.p`
    color:#f1f1f1;
    font-size: 13px;
    font-weight: 500;
`;

const UserNameSpan=styled.span`
    color:#aaaaaa;
    font-size: 12px;
    cursor: pointer;
&:hover{
    color:#f1f1f1;
}
`;

const Comment=styled.p`
    color:#f1f1f1;
    font-size: 14px;
`;

const LikeOption=styled.div`
    display: flex;
    gap: 20px;
`;

const LikeIcon=styled.div`
    color: #aaaaaa;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    `;

const ChannelLiked=styled.div`
    position: relative;
`;

const ChannelDp=styled.div`
    width: 15px;
    height:15px;
    `;
    const ThumbNailImg=styled.img`
    width: 100%;
    height:100%;
    border-radius: 50%;
`;

const LikeHeart=styled.div`
    position:absolute;
    font-size: 15px;
    top: 7px;
    left: 6px;
    
`;

const Reply=styled.p`
    color: #f1f1f1;
    font-size: 13px;
    &:hover{
        background-color: #cccccc;
        border-radius:10px;
        padding: 2px 10px;
    }
`;
