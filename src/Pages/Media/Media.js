import React, { useContext, useEffect, useState } from 'react';
import MediaCard from '../../Component/MediaCard/MediaCard';
import { AuthContext } from '../../context/AuthProvider';
import NewsFeedCard from '../Home/NewsFeed/NewsFeedCard';

const Media = () => {
    const [posts, setPosts] = useState([])
    const { refresh } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://e-media-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setPosts(data.data)

                }
            })
            .catch(err => console.error(err))

    }, [refresh])


    return (
        <div className='grid grid-cols-1  min-h-screen'>
            {/* <NewsFeedCard></NewsFeedCard> */}

            {
                posts?.map(post => <MediaCard key={post._id} post={post}></MediaCard>)
            }

        </div>
    );
};

export default Media;