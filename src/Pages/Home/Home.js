import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LeftDrawer from '../../Component/Drawer/LeftDrawer';
import { AuthContext } from '../../context/AuthProvider';
import NewsFeed from './NewsFeed/NewsFeed';
import PostArea from './PostArea/PostArea';

const Home = () => {
    const { user } = useContext(AuthContext)


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
                    {
                        user?.uid ?
                            <>
                                <PostArea></PostArea>
                            </>
                            :
                            <>
                                <span className='text-xl text-center font-bold mb-4'>Please <Link className='btn btn-accent btn-xs' to='/login'>Login</Link> First To Create a Post</span>

                            </>
                    }


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