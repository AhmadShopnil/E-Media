import React from 'react';
import LeftDrawer from '../../Component/Drawer/LeftDrawer';
import NewsFeed from './NewsFeed/NewsFeed';
import PostArea from './PostArea/PostArea';

const Home = () => {
    return (
        <div className='flex min-h-screen'>

            <div className='mb-8 grid grid-cols-4 '>
                {/* <div className='  md:hidden'>
                    <LeftDrawer></LeftDrawer>
                </div> */}
                <div className=' bg-green-50 hidden md:block '>
                    <h4 className=' mt-16 text-center font-semibold text-2xl'> Coming Soon</h4>
                </div>
                <div className='col-span-4 md:col-span-2  grid grid-cols-1 justify-center'>
                    <PostArea></PostArea>
                    <NewsFeed></NewsFeed>
                </div>
                <div className=' bg-green-50 hidden md:block  '>
                    <h4 className=' mt-16 text-center font-semibold text-2xl'> Coming Soon</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;