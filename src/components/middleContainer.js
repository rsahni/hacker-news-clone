import React, {useEffect, useState} from 'react';
import Moment from 'react-moment';
import getSiteHostName from '../utils/getSiteHostName';

const MiddleContainer = (props) => {
    const {data} = props;
    
    const handleAuthorClick = (stingTags) => {
        console.log(stingTags);
    };

    const handleHideOnClick = () =>{

    };

    return (<React.Fragment>
                <div className="hn-middle-section">
                    <ul>
                        {data && data.map((post, index)=>{
                            const siteName = getSiteHostName(post.url) || 'news.ycombinator.com';
                            const tags = [] 
                            post._tags.forEach((tag, index) => {
                                if(index === 0 || index === 1){
                                    return tags.push(tag);
                                }
                            });
                            const stingTags = tags.toLocaleString();
    
                            return (<li key={`hn-post-list-${index}`} className="post-list-items">
                                        <div className="first-column align-center">{post.num_comments}</div>
                                        <div className="second-column align-center">{post.points}</div>
                                        <div className="third-column align-center upvote"><a href="#" className="anchor-link" ><span className="uparrow-icon"></span></a></div>
                                        <div className="fourth-column">
                                            {post.title} (<a href={post.url} >{siteName}</a>) by {post.author} <span className="post-created-time"><Moment fromNow>{post.created_at}</Moment></span> <a href="#" className="hide-btn" onClick={(e) => {handleHideOnClick()}}>[hide]</a></div>
                                    </li>);
                        })}
                        
                    </ul>
                </div>
            </React.Fragment>
            );
};

export default MiddleContainer;