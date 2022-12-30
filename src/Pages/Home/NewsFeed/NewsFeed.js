import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import NewsFeedCard from './NewsFeedCard';

const NewsFeed = () => {
    const [posts, setPosts] = useState([])
    const { user, refresh } = useContext(AuthContext)

    useEffect(() => {

        fetch(`https://e-media-server.vercel.app/HomePagePost`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setPosts(data.data.slice(0, 3))

                }
            })
            .catch(err => console.error(err))

    }, [refresh])

    // console.log(posts)

    return (
        <div className=''>
            {
                posts?.map(post => <NewsFeedCard key={post._id} post={post}></NewsFeedCard>)
            }


        </div>
    );
};

export default NewsFeed;