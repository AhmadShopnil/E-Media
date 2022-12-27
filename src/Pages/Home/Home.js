import React from 'react';
import NewsFeed from './NewsFeed/NewsFeed';
import PostArea from './PostArea/PostArea';

const Home = () => {
    return (
        <div>
            <PostArea></PostArea>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;