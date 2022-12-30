import { HeartIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddComment from '../../Component/AddComment/AddComment';
import { AuthContext } from '../../context/AuthProvider';

const PostDetails = () => {
    const { refresh } = useContext(AuthContext);
    const data = useLoaderData();
    const postDetails = data.data;
    const [comments, setComments] = useState([])
    // const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://e-media-server.vercel.app/comments/${postDetails?._id}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setComments(data.data)
                }
            })

    }, [refresh])





    return (
        <div className='mx-5 md:mx-20'>
            <div className='w-full'>
                <img className='w-full mx-auto h-96 ' src={postDetails?.photo} alt="" />
                <div className='mt-3 mb-6 flex gap-2'>
                    <HeartIcon className=" h-6 w-6 text-red-500" />
                    <small>{postDetails?.react}</small>
                </div>
                <div>
                    <p>{postDetails?.text}</p>
                    <h3 className='text-sm font-bold mt-4'>Author : <span className=' font-light'>{postDetails?.userName}</span></h3>
                    <h3 className='text-sm font-bold mb-4'>Post Date: <span className=' font-light'>{postDetails?.time}</span></h3>

                </div>
            </div>


            <div className='my-8'>
                <AddComment postId={postDetails?._id}></AddComment>
                <h2 className='font-semibold text-xl mb-4'>All Comments--</h2>
                <div className='flex flex-col gap-4 md:ml-10 '>
                    {
                        comments?.map(comment => {
                            return <div className='flex gap-1'>
                                <img className=" w-12 mask mask-circle" src={comment?.userPhoto} />
                                <div className='bg-blue-50 pl-3 pr-6 py- rounded-xl'>
                                    <h4 className='font-semibold'>{comment?.userName}</h4>
                                    <small>{comment?.comment}</small>

                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default PostDetails;