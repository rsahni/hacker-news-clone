import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import MiddleContainer from '../components/middleContainer';

test('renders middle container', () => {
    const post = [{"created_at":"2020-07-26T14:58:56.000Z","title":"New ‘Meow’ attack has deleted almost 4k unsecured databases","url":"https://www.bleepingcomputer.com/news/security/new-meow-attack-has-deleted-almost-4-000-unsecured-databases/","author":"based2","points":299,"story_text":null,"comment_text":null,"num_comments":178,"story_id":null,"story_title":null,"story_url":null,"parent_id":null,"created_at_i":1595775536,"_tags":["story","author_based2","story_23957510","front_page"],"objectID":"23957510","_highlightResult":{"title":{"value":"New ‘Meow’ attack has deleted almost 4k unsecured databases","matchLevel":"none","matchedWords":[]},"url":{"value":"https://www.bleepingcomputer.com/news/security/new-meow-attack-has-deleted-almost-4-000-unsecured-databases/","matchLevel":"none","matchedWords":[]},"author":{"value":"based2","matchLevel":"none","matchedWords":[]}}}];
    const postHideData= window.localStorage.getItem('postHideData') ? window.localStorage.getItem('postHideData') : [];
    const setPostHideData=[];
    const postVotes= JSON.parse(window.localStorage.getItem('postVoteCounts')) ? JSON.parse(window.localStorage.getItem('postVoteCounts')) : [];
    const setPostVotes=[];
    
    render(<MiddleContainer 
                post={post} 
                postHideData={postHideData} 
                setPostHideData={setPostHideData}
                postVotes={postVotes} 
                setPostVotes={setPostVotes}
            />);
    expect(
        document.getElementsByClassName('hn-middle-section')[0],
    ).toBeInTheDocument()
});

test('renders middle container matches snapshot', () => {
    const post = [{"created_at":"2020-07-26T14:58:56.000Z","title":"New ‘Meow’ attack has deleted almost 4k unsecured databases","url":"https://www.bleepingcomputer.com/news/security/new-meow-attack-has-deleted-almost-4-000-unsecured-databases/","author":"based2","points":299,"story_text":null,"comment_text":null,"num_comments":178,"story_id":null,"story_title":null,"story_url":null,"parent_id":null,"created_at_i":1595775536,"_tags":["story","author_based2","story_23957510","front_page"],"objectID":"23957510","_highlightResult":{"title":{"value":"New ‘Meow’ attack has deleted almost 4k unsecured databases","matchLevel":"none","matchedWords":[]},"url":{"value":"https://www.bleepingcomputer.com/news/security/new-meow-attack-has-deleted-almost-4-000-unsecured-databases/","matchLevel":"none","matchedWords":[]},"author":{"value":"based2","matchLevel":"none","matchedWords":[]}}}];
    const postHideData= window.localStorage.getItem('postHideData') ? window.localStorage.getItem('postHideData') : [];
    const setPostHideData=[];
    const postVotes= JSON.parse(window.localStorage.getItem('postVoteCounts')) ? JSON.parse(window.localStorage.getItem('postVoteCounts')) : [];
    const setPostVotes=[];
    
    const { asFragment } = render(<MiddleContainer 
                post={post} 
                postHideData={postHideData} 
                setPostHideData={setPostHideData}
                postVotes={postVotes} 
                setPostVotes={setPostVotes}
            />);
    expect(asFragment()).toMatchSnapshot();
});