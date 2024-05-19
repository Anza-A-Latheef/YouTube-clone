import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdSort } from 'react-icons/md';
import { BiLike, BiDislike } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const Comments = ({ thumbnail, comments, commentList }) => {
    const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'];
    const [showSortOptions, setShowSortOptions] = useState(false);
    const sortButtonRef = useRef(null);
    const [sortOption, setSortOption] = useState('newUploaded');
    // const [sortedComments, setSortedComments] = useState(commentList);
    const [sortedComments, setSortedComments] = useState(commentList ?? []);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can send the new comment to the server or update the state with the new comment
        // For now, let's just log the new comment
        console.log('New Comment:', newComment);
        // Clear the comment input field after submission
        setNewComment('');
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        const sortedData = [...sortedComments].sort((a, b) => {
            const dateA = new Date(a.posted);
            const dateB = new Date(b.posted);
            switch (option) {
                case 'newUploaded':
                    return dateB - dateA;
                case 'oldUploaded':
                    return dateA - dateB;
                case 'topUploaded':
                    return b.like - a.like;
                case 'lowUploaded':
                    return a.like - b.like;
                default:
                    return 0;
            }
        });
        setSortedComments(sortedData);
        setShowSortOptions(false);
    };


useEffect(() => {
    if (commentList) {
        handleSortChange(sortOption);
    }
}, [commentList, sortOption]);

    const getFormattedTime = (date) => {
        const minutesDifference = differenceInMinutes(new Date(), new Date(date));
        const hoursDifference = differenceInHours(new Date(), new Date(date));
        const daysDifference = differenceInDays(new Date(), new Date(date));
        const monthsDifference = differenceInMonths(new Date(), new Date(date));
        const yearsDifference = differenceInYears(new Date(), new Date(date));

        if (yearsDifference >= 1) {
            return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
        } else if (monthsDifference >= 1) {
            return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
        } else if (daysDifference >= 1) {
            return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
        } else if (hoursDifference >= 1) {
            return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
        } else {
            return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
        }
    };

    return (
        <CommentsContainer>
            <CommentsHead>
                <CommentCount>{comments} Comments</CommentCount>
                <SortOption ref={sortButtonRef} onClick={() => setShowSortOptions(!showSortOptions)}>
                    <SortIcon><MdSort size={25} /></SortIcon>
                    <Sort>Sort by</Sort>
                </SortOption>
                {showSortOptions && (
                    <SortContent>
                        <SortSelect onClick={() => handleSortChange('newUploaded')}>New uploaded</SortSelect>
                        <SortSelect onClick={() => handleSortChange('oldUploaded')}>Old uploaded</SortSelect>
                        <SortSelect onClick={() => handleSortChange('topUploaded')}>Top Likes uploaded</SortSelect>
                        <SortSelect onClick={() => handleSortChange('lowUploaded')}>Low Liked most</SortSelect>
                    </SortContent>
                )}
            </CommentsHead>
  <AddComment>
            <CommentImg>
                <CommenterProfile>A</CommenterProfile>
            </CommentImg>
            <CommentForm>
            <CommentInput 
                    type="text" 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={handleInputChange}
                />
                <Submit type="submit">Comment</Submit>
                </CommentForm>
        </AddComment>
            {/* {sortedComments.map((comment, index) => ( */}
        {sortedComments && sortedComments.map((comment, index) => (
                <CommentsArea key={index}>
                    <UserProfile color={colors[Math.floor(Math.random() * colors.length)]}>{comment.user.charAt(0)}</UserProfile>
                    <CommentDetails>
                        <UserName>@{comment.user} <UserNameSpan>{getFormattedTime(comment.posted)}</UserNameSpan></UserName>
                        <Comment>{comment.comment}</Comment>
                        <LikeOption>
                            <LikeIcon><BiLike size={22} color='#f1f1f1' /> {comment.like}</LikeIcon>
                            <LikeIcon><BiDislike size={22} color='#f1f1f1' /></LikeIcon>
                            <ChannelLiked>
                                <ChannelDp><ThumbNailImg src={thumbnail} /></ChannelDp>
                                <LikeHeart><FcLike /></LikeHeart>
                            </ChannelLiked>
                            <Reply>Reply</Reply>
                        </LikeOption>
                    </CommentDetails>
                </CommentsArea>
            ))}
        </CommentsContainer>
    );
};

export default Comments;

const CommentsContainer=styled.div`
    display:flex;
    flex-direction:column;
    @media (max-width: 1024px) {
        margin-left: 20px;
    }
`;

const CommentsHead=styled.div`
    display:flex;
    position: relative;
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
    cursor: pointer;
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

const SortContent=styled.div`
    position: absolute;
    background-color: #666;
    width: max-content;
    height: max-content;
    padding: 10px;
    top: 76%;
    border-radius: 5px;
    left: 20%;
    z-index: 1;
    visibility: none;
`;

const SortMethod=styled.select`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const SortSelect=styled.option`
    color:#fff;
    font-size: 15px;
    cursor: pointer;
    padding:7px;
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

const AddComment= styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const CommentImg= styled.div`
    padding:10px;
`;

const CommenterProfile= styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f1f1f1;
    background-color: red;
    width: 35px;
    height: 35px;
`;

const CommentForm= styled.form`
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: end;
`;

const CommentInput= styled.input`
    width: 100%;
    background-color: transparent;
    border:none;
    border-bottom:1px solid #f1f1f1;
    color:#f1f1f1;
    outline: none;
    margin: 10px 0px;
    font-size: medium;

    &::placeholder{
        color:#f1f1f1;
    }
`;

const Submit= styled.button`
     background-color: transparent;
     width: 20%;
     background-color: blue;
     color: #fff;
     border: none;
     padding: 7px;
     border-radius: 10px;
     cursor: pointer;
`;
 
// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { MdSort } from 'react-icons/md';
// import { BiLike, BiDislike } from 'react-icons/bi';
// import { FcLike } from 'react-icons/fc';
// import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

// const Comments = ({ thumbnail, comments, commentList }) => {
//     const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845'];
//     const [showSortOptions, setShowSortOptions] = useState(false);
//     const sortButtonRef = useRef(null);
//     const [sortOption, setSortOption] = useState('newUploaded');
//     const [sortedComments, setSortedComments] = useState(commentList);

//     const handleSortChange = (option) => {
//         setSortOption(option);
//         const sortedData = [...sortedComments].sort((a, b) => {
//             const dateA = new Date(a.posted);
//             const dateB = new Date(b.posted);
//             switch (option) {
//                 case 'newUploaded':
//                     return dateB - dateA;
//                 case 'oldUploaded':
//                     return dateA - dateB;
//                 case 'topUploaded':
//                     return b.like - a.like;
//                 case 'lowUploaded':
//                     return a.like - b.like;
//                 default:
//                     return 0;
//             }
//         });
//         setSortedComments(sortedData);
//         setShowSortOptions(false);
//     };

//     useEffect(() => {
//         handleSortChange(sortOption);
//     }, [commentList, sortOption]);

//     const getFormattedTime = (date) => {
//         const minutesDifference = differenceInMinutes(new Date(), new Date(date));
//         const hoursDifference = differenceInHours(new Date(), new Date(date));
//         const daysDifference = differenceInDays(new Date(), new Date(date));
//         const monthsDifference = differenceInMonths(new Date(), new Date(date));
//         const yearsDifference = differenceInYears(new Date(), new Date(date));

//         if (yearsDifference >= 1) {
//             return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
//         } else if (monthsDifference >= 1) {
//             return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
//         } else if (daysDifference >= 1) {
//             return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
//         } else if (hoursDifference >= 1) {
//             return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
//         } else {
//             return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
//         }
//     };

//     return (
//         <CommentsContainer>
//             <CommentsHead>
//                 <CommentCount>{comments} Comments</CommentCount>
//                 <SortOption ref={sortButtonRef} onClick={() => setShowSortOptions(!showSortOptions)}>
//                     <SortIcon><MdSort size={25} /></SortIcon>
//                     <Sort>Sort by</Sort>
//                 </SortOption>
//                 {showSortOptions && (
//                     <SortContent>
//                         <SortSelect onClick={() => handleSortChange('newUploaded')}>New uploaded</SortSelect>
//                         <SortSelect onClick={() => handleSortChange('oldUploaded')}>Old uploaded</SortSelect>
//                         <SortSelect onClick={() => handleSortChange('topUploaded')}>Top Likes uploaded</SortSelect>
//                         <SortSelect onClick={() => handleSortChange('lowUploaded')}>Low Liked most</SortSelect>
//                     </SortContent>
//                 )}
//             </CommentsHead>
//   <AddComment>
//             <CommentImg>
//                 <CommenterProfile>A</CommenterProfile>
//             </CommentImg>
//             <CommentForm>
//             <CommentInput 
//                     type="text" 
//                     placeholder="Add a comment..." 
//                 />
//                 <Submit type="button">Comment</Submit>
//                 </CommentForm>
//         </AddComment>

//             {sortedComments.map((comment, index) => (
//                 <CommentsArea key={index}>
//                     <UserProfile color={colors[Math.floor(Math.random() * colors.length)]}>{comment.user.charAt(0)}</UserProfile>
//                     <CommentDetails>
//                         <UserName>@{comment.user} <UserNameSpan>{getFormattedTime(comment.posted)}</UserNameSpan></UserName>
//                         <Comment>{comment.comment}</Comment>
//                         <LikeOption>
//                             <LikeIcon><BiLike size={22} color='#f1f1f1' /> {comment.like}</LikeIcon>
//                             <LikeIcon><BiDislike size={22} color='#f1f1f1' /></LikeIcon>
//                             <ChannelLiked>
//                                 <ChannelDp><ThumbNailImg src={thumbnail} /></ChannelDp>
//                                 <LikeHeart><FcLike /></LikeHeart>
//                             </ChannelLiked>
//                             <Reply>Reply</Reply>
//                         </LikeOption>
//                     </CommentDetails>
//                 </CommentsArea>
//             ))}
//         </CommentsContainer>
//     );
// };

// export default Comments;

// const CommentsContainer=styled.div`
//     display:flex;
//     flex-direction:column;
//     @media (max-width: 1024px) {
//         margin-left: 20px;
//     }
// `;

// const CommentsHead=styled.div`
//     display:flex;
//     position: relative;
//     border-bottom: 1px solid #333333;
//     padding: 20px 0px;
//     margin-bottom: 20px;
//     `;

// const CommentCount=styled.h5`
//     color:#f1f1f1;
//     font-size: 20px;
//     `;

// const SortOption=styled.div`
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     margin-left: 20px;
//     `;

// const SortIcon=styled.div`
//     color: #f1f1f1;
//     font-size: 20px;
//     display:flex;
//     justify-content: center;
//     `;

// const Sort=styled.p`
//     color: #f1f1f1;
//     font-size: 14px;
//     font-weight: 500;
//     `;

// const SortContent=styled.div`
//     position: absolute;
//     background-color: #666;
//     width: max-content;
//     height: max-content;
//     padding: 10px;
//     top: 76%;
//     border-radius: 5px;
//     left: 20%;
//     z-index: 1;
//     visibility: none;
// `;

// const SortMethod=styled.select`
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
// `;

// const SortSelect=styled.option`
//     color:#fff;
//     font-size: 15px;
//     cursor: pointer;
//     padding:7px;
// `;


// const CommentsArea=styled.div`
//     display: flex;
//     align-items: normal;
//     gap:10px;
//     padding-top: 20px;
// `;

// const UserProfile=styled.div`
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     color: #f1f1f1;
//     background-color: ${(props) => props.color};
//     width: 35px;
//     height: 35px;
// `;

// const CommentDetails=styled.div`
//     display:flex;
//     flex-direction: column;
//     gap: 7px;
// `;

// const UserName=styled.p`
//     color:#f1f1f1;
//     font-size: 13px;
//     font-weight: 500;
// `;

// const UserNameSpan=styled.span`
//     color:#aaaaaa;
//     font-size: 12px;
//     cursor: pointer;
// &:hover{
//     color:#f1f1f1;
// }
// `;

// const Comment=styled.p`
//     color:#f1f1f1;
//     font-size: 14px;
// `;

// const LikeOption=styled.div`
//     display: flex;
//     gap: 20px;
// `;

// const LikeIcon=styled.div`
//     color: #aaaaaa;
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     font-size: 12px;
//     `;

// const ChannelLiked=styled.div`
//     position: relative;
// `;

// const ChannelDp=styled.div`
//     width: 15px;
//     height:15px;
//     `;
//     const ThumbNailImg=styled.img`
//     width: 100%;
//     height:100%;
//     border-radius: 50%;
// `;

// const LikeHeart=styled.div`
//     position:absolute;
//     font-size: 15px;
//     top: 7px;
//     left: 6px;
    
// `;

// const Reply=styled.p`
//     color: #f1f1f1;
//     font-size: 13px;
//     &:hover{
//         background-color: #cccccc;
//         border-radius:10px;
//         padding: 2px 10px;
//     }
// `;

// const AddComment= styled.div`
//     display: flex;
//     align-items: center;
//     width: 100%;
// `;

// const CommentImg= styled.div`
//     padding:10px;
// `;

// const CommenterProfile= styled.div`
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     color: #f1f1f1;
//     background-color: red;
//     width: 35px;
//     height: 35px;
// `;

// const CommentForm= styled.form`
//     display: flex;
//     flex-direction: column;
//     width:100%;
//     align-items: end;
// `;

// const CommentInput= styled.input`
//     width: 100%;
//     background-color: transparent;
//     border:none;
//     border-bottom:1px solid #f1f1f1;
//     color:#f1f1f1;
//     outline: none;
//     margin: 10px 0px;
//     font-size: medium;

//     &::placeholder{
//         color:#f1f1f1;
//     }
// `;

// const Submit= styled.button`
//      background-color: transparent;
//      width: 20%;
//      background-color: blue;
//      color: #fff;
//      border: none;
//      padding: 7px;
//      border-radius: 10px;
//      cursor: pointer;
// `;
 