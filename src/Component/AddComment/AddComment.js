import React, { useContext, useEffect, useState } from 'react';
import { BeakerIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../context/AuthProvider';

const AddComment = ({ postId, reactCount }) => {
    const { user, refresh, setRefresh } = useContext(AuthContext);
    const time = new Date().toISOString();
    const [reaction, setReaction] = useState(false);

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

    // For post React
    const reactInfo = {
        userEmail: user?.email,
        userName: user?.displayName,
        time,
        postId,
        react: 'love'
    }

    const handleReact = () => {

        fetch(`https://e-media-server.vercel.app/addReact`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reactInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setReaction(true)

                }
            })
            .catch(err => console.error(err))



        // increase reaction
        const updatedReactInfo = {
            react: reactCount + 1
        }
        console.log(reactCount)

        fetch(`https://e-media-server.vercel.app/updateReaction/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedReactInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setRefresh(!refresh)

                }
            })
            .catch(error => {

            })


    }


    //    useEffect(()=>{

    //    },[])


    return (
        <div className=" mb-2 flex gap-2 justify-center items-center">

            <button>

                {
                    reaction === false ?
                        <>
                            <HeartIcon onClick={handleReact} className=" h-8 w-8 text-gray-300" />
                        </>
                        :
                        <>
                            <HeartIcon className=" h-6 w-6 text-red-500" />
                        </>
                }


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