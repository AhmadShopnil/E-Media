import React from 'react';
import NewsFeed from './NewsFeed/NewsFeed';
import PostArea from './PostArea/PostArea';

const Home = () => {
    return (
        <div className='mb-8 grid grid-cols-4 '>
            <div className=' bg-green-50 '>
                <h4 className=' mt-16 text-center font-semibold text-2xl'> Left Side</h4>
            </div>
            <div className='col-span-2  grid grid-cols-1 justify-center'>
                <PostArea></PostArea>
                <NewsFeed></NewsFeed>
            </div>
            <div className=' bg-green-50 '>
                <h4 className=' mt-16 text-center font-semibold text-2xl'> Right Side</h4>
            </div>
        </div>
    );
};

export default Home;