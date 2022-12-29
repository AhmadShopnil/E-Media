import React, { useContext } from 'react';
import { BeakerIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../context/AuthProvider';

const AddComment = ({ postId }) => {
    const { user, refresh, setRefresh } = useContext(AuthContext);
    const time = new Date().toISOString();


    const handleAddComment = (event) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value

        const commentInfo = {
            userEmail: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            comment,
            time,
            postId
        }

        fetch(`https://e-media-server.vercel.app/saveComment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
                alert('added comment')
                form.reset()
            })
            .catch(err => console.error(err))
    }




    return (
        <div className=" mb-2 flex gap-2 justify-center items-center">

            <button>
                <HeartIcon className=" h-8 w-8 text-gray-300" />
            </button>

            <form onSubmit={handleAddComment} className='flex gap-1 '>
                <input name='comment' type="text" placeholder="Comment Here" className="input input-bordered input-xs w-full max-w-sm" />
                <input className='btn btn-xs' type="submit" value="Add" />
            </form>
            <button>
                <ShareIcon className=" h-5 w-5 text-bg-500" />
            </button>
        </div>
    );
};

export default AddComment;