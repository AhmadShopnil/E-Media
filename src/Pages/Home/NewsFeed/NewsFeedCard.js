import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { BeakerIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'
import AddComment from '../../../Component/AddComment/AddComment';


const NewsFeedCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const author = post.userName || post.userEmail
    return (
        <div className='p-6 mx-2 mb-6 shadow-2xl bg-base-100 rounded-lg'>
            <div className='flex gap-3 items-center mb-3'>
                <div className="w-10">
                    {/* <li> <Link to='/about'>About</Link></li> */}
                    <img className="mask mask-circle" src={post.userPhoto} />
                </div>
                <h4 className='font-bold '>
                    {author}
                </h4>
            </div>
            <img className='w-full' src={post.photo} alt="" />
            <div className='mt-3 flex gap-2'>
                <HeartIcon className=" h-6 w-6 text-red-500" />
                <small>{post?.react}</small>
            </div>
            <div>
                <p className='my-4'>{post.text}</p>


                <div className=''>
                    <Link to={`/postDetails/${post._id}`} className='btn btn-outline btn-info btn-xs mx-auto'>See More</Link>
                </div>


            </div>
            <AddComment postId={post?._id} reactCount={post?.react}></AddComment>
        </div>
    );
};

export default NewsFeedCard;