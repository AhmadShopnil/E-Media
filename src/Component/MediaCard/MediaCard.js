import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';

const MediaCard = ({ post }) => {


    return (
        <div className='my-4'>
            <div className="card mx-auto w-4/5  bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={post?.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <div className="flex justify-center ">
                            <HeartIcon className=" h-6 w-6 text-red-500" />
                            <span className='mx-2'>{post?.react}</span>
                        </div>

                    </div>
                    <h2 className="card-title">
                        author:  {post?.userName}

                    </h2>
                    <p>{post.text}</p>
                    <Link to={`/postDetails/${post?._id}`} className='btn btn-outline btn-info btn-sm'>Details</Link>
                </div>
                <div className='mb-4'>
                    <AddComment postId={post?._id} reactCount={post?.react}></AddComment>
                </div>
            </div>

        </div>
    );
};

export default MediaCard;