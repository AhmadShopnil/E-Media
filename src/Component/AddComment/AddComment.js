import React from 'react';
import { BeakerIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'

const AddComment = () => {
    return (
        <div className=" mb-2 flex gap-2 justify-center items-center">

            <button>
                <HeartIcon className=" h-8 w-8 text-gray-300" />
            </button>

            <form className='flex gap-1 '>
                <input type="text" placeholder="Comment Here" className="input input-bordered input-xs w-full max-w-sm" />
                <input className='btn btn-xs' type="submit" value="Add" />
            </form>
            <button>
                <ShareIcon className=" h-6 w-6 text-bg-500" />
            </button>
        </div>
    );
};

export default AddComment;