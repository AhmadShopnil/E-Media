import React from 'react';
import { Link } from 'react-router-dom';
import NewsFeedCard from './NewsFeedCard';

const NewsFeed = () => {
    return (
        <div className='flex justify-center'>
            <NewsFeedCard></NewsFeedCard>

        </div>
    );
};

export default NewsFeed;