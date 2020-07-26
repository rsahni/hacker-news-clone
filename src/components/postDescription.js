import React from 'react';
import Moment from 'react-moment';
import getSiteHostName from '../utils/getSiteHostName';

const PostDescription = (props) => {
    const {post, postHideData, setPostHideData} = props;
    const siteName = getSiteHostName(post.url) || 'news.ycombinator.com';

    const handleHideOnClick = (e) =>{
        e.preventDefault();
        const newPostHideData = [...postHideData];
        if(postHideData.length > 0){
            newPostHideData.push(post.objectID);
            window.localStorage.setItem('postHideData', JSON.stringify(newPostHideData));
            setPostHideData(newPostHideData);
        }else{
            window.localStorage.setItem('postHideData', JSON.stringify([post.objectID]));
            setPostHideData([post.objectID]);
        }
    };

    return(
        <React.Fragment>
            {post.title} (<a href={post.url} >{siteName}</a>) by {post.author} <span className="post-created-time"><Moment fromNow>{post.created_at}</Moment></span> <button  aria-label="Hide this post" className="hide-btn" onClick={(e) => {handleHideOnClick(e)}} >[hide]</button>
        </React.Fragment>
    );
};

export default PostDescription;