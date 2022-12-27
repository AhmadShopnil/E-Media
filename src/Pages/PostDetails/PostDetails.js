import React from 'react';
import AddComment from '../../Component/AddComment/AddComment';

const PostDetails = () => {

    const comments = [
        {
            userName: 'Shopnil',
            text: 'Wow asd d asd  asd dad sad sad asd asds fa sadsa sd sd'
        },
        {
            userName: 'Ahamad',
            text: 'Good post keep it up'
        },
        {
            userName: 'Dip',
            text: 'Nice'
        },
    ]

    return (
        <div className='mx-20'>
            <div className='w-full'>
                <img className='w-3/4 mx-auto h-96 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s" alt="" />
                <div>
                    <h3 className=' font-bold my-4'>Author : <span className='text-2xl font-light'>Shopnil</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?</p>
                </div>
            </div>


            <div className='my-8'>
                <AddComment></AddComment>
                <h2 className='font-semibold text-xl mb-4'>All Comments--</h2>
                <div className='flex flex-col gap-4 md:ml-10 '>
                    {
                        comments.map(comment => {
                            return <div className='flex gap-1'>
                                <img className=" w-10 mask mask-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&usqp=CAU" />
                                <div className='bg-blue-50 p-3 rounded-xl'>
                                    <h4 className='font-semibold'>{comment?.userName}</h4>
                                    <small>{comment?.text}</small>

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