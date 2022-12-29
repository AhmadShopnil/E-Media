import React, { useEffect, useState } from 'react';
import MediaCard from '../../Component/MediaCard/MediaCard';
import NewsFeedCard from '../Home/NewsFeed/NewsFeedCard';

const Media = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://e-media-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setPosts(data.data)

                }
            })
            .catch(err => console.error(err))

    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-screen'>
            {/* <NewsFeedCard></NewsFeedCard> */}

            {
                posts?.map(post => <MediaCard key={post._id} post={post}></MediaCard>)
            }

        </div>
    );
};

export default Media;