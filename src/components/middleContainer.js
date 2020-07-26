import React, { useState, useEffect } from 'react';
import PostDescription from '../components/postDescription';

const MiddleContainer = (props) => {
    const {data, postHideData, setPostHideData} = props;
    const [postVotes, setPostVotes] = useState({});

    useEffect(()=>{
        if(window.localStorage.getItem('postVoteCounts')){
            setPostVotes(JSON.parse(window.localStorage.getItem('postVoteCounts')));
        };
    }, []);
    
    const handleUpvoteClick = (e, objectID, votes) =>{
        e.preventDefault(); 
        if(window.localStorage.getItem('postVoteCounts')){
            let tempVoteCounts = JSON.parse(window.localStorage.getItem('postVoteCounts'));
            let storageVotes = tempVoteCounts[objectID] ? tempVoteCounts[objectID] : votes;
            tempVoteCounts[objectID] = storageVotes + 1;
            window.localStorage.setItem('postVoteCounts', JSON.stringify(tempVoteCounts));
            setPostVotes(JSON.parse(window.localStorage.getItem('postVoteCounts')));
        }else{
            let tempJsonVar = {};
            tempJsonVar[objectID] = votes + 1;
            window.localStorage.setItem('postVoteCounts', JSON.stringify(tempJsonVar));
            setPostVotes(JSON.parse(window.localStorage.getItem('postVoteCounts')));
        }
    };

    return (<React.Fragment>
                <div className="hn-middle-section">
                    <ul>
                        {data && data.map((post, index)=>{
                            if(postHideData.indexOf(post.objectID) === -1){
                                return (<li key={`hn-post-list-${index}`} className="post-list-items">
                                    <div className="first-column align-center">
                                        <div className="mobile-heading">Commnets</div>
                                        <div className="column-content">{post.num_comments}</div>
                                    </div>
                                    <div className="second-column align-center">
                                        <div className="mobile-heading">View Count</div>
                                        <div className="column-content">{postVotes[post.objectID] ? postVotes[post.objectID] : post.points}</div>
                                    </div>
                                    <div className="third-column align-center upvote"> 
                                        <div className="mobile-heading">UpVote</div>
                                        <div className="column-content"><a href="#" onClick={(e) => {handleUpvoteClick(e, post.objectID, post.points)}} className="anchor-link" ><span className="uparrow-icon"></span></a></div>
                                    </div>
                                    <div className="fourth-column">
                                        <div className="mobile-heading">News Details</div>
                                        <div className="column-content"><PostDescription post={post} postHideData={postHideData} setPostHideData={setPostHideData} /></div>
                                    </div>
                                </li>);
                            }
                        })}
                        
                    </ul>
                </div>
            </React.Fragment>
            );
};

export default MiddleContainer;