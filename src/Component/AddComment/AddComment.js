import React, { useContext, useEffect, useState } from 'react';
import { BeakerIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../context/AuthProvider';

const AddComment = ({ postId, reactCount, reactedUsers }) => {
    const { user, refresh, setRefresh } = useContext(AuthContext);
    const time = new Date().toISOString();
    const [reaction, setReaction] = useState(false);

    useEffect(() => {

        const result = reactedUsers?.find((a) => a === user?.email)
        if (result === user?.email) {
            setReaction(true)
        }


    }, [])

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
            react: reactCount + 1,
            userEmail: user?.email,
        }

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


    const handleRemoveReact = () => {
        setReaction(false)
        const userInfo = {
            userEmail: user?.email,
        }

        fetch(`https://e-media-server.vercel.app/removeReaction/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
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


    return (
        <div className=" mb-2 flex gap-2 justify-center items-center">
            <span>{reactCount}</span>
            <button className=''>

                {
                    reaction === false ?
                        <>
                            <HeartIcon onClick={handleReact} className=" h-8 w-8 text-gray-300" />
                        </>
                        :
                        <>
                            <HeartIcon onClick={handleRemoveReact} className=" h-8 w-8 text-red-500" />
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