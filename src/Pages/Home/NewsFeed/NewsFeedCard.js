import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { BeakerIcon, HeartIcon } from '@heroicons/react/24/solid'
const NewsFeedCard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='p-6 mx-2 mb-6 shadow-2xl bg-base-100 rounded-lg'>
            <div className='flex gap-3 items-center mb-3'>
                <div className="w-10">
                    <img className="mask mask-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&usqp=CAU" />
                </div>
                <h4 className='font-bold '>{user?.displayName}</h4>
            </div>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_uLwsDjzOsMp36mN6wWv6gRtXYKI2j8rUg&usqp=CAU" alt="" />
            <div>
                <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum placeat, praesentium officiis aliquam nemo delectus, nihil natus veritatis reiciendis dolorum ipsum deleniti ipsam? Veritatis consectetur dolorem cumque nisi reprehenderit asperiores possimus, tempore nihil qui voluptatum voluptatem in odio earum.</p>


                <div className=''>
                    <Link to='/postDetails' className='btn btn-outline btn-info btn-sm mx-auto'>See More</Link>
                </div>

                <div className='mt-3 flex gap-2'>
                    <HeartIcon className=" h-6 w-6 text-red-500" />
                    <small>99</small>
                </div>
            </div>
        </div>
    );
};

export default NewsFeedCard;