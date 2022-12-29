import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const PostArea = () => {
    const { user, refresh, setRefresh } = useContext(AuthContext)

    const imageHostKeyImagebb = process.env.REACT_APP_IMGBB_API_KEY

    const handleAddPost = (event) => {
        event.preventDefault()
        const form = event.target
        const text = form.text.value
        const image = form.photo.files[0]
        const time = new Date().toISOString()

        const formData = new FormData()
        formData.append('image', image)
        // console.log(formData)

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKeyImagebb}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                if (photoData.success) {
                    const post = {
                        userEmail: user?.email,
                        userName: user?.displayName,
                        userPhoto: user?.photoURL,
                        text,
                        photo: photoData.data.url,
                        time
                    }

                    fetch(`https://e-media-server.vercel.app/savePost`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.status) {
                                setRefresh(!refresh)
                                alert('Added Post')
                            }
                        })
                        .catch(err => console.error(err))
                }
            })
            .catch(err => console.error(err))
        form.reset()
    }


    return (
        <div className='my-2 '>
            <div className='flex  justify-center gap-6 '>
                <form className='' onSubmit={handleAddPost}>
                    <div className=' flex flex-wrap flex-col justify-center items-center md:flex-row  gap-4'>
                        <textarea name='text' className="textarea textarea-info h-10" placeholder="What's in your mind ?" required></textarea>

                        <input name='photo' type="file" className="file-input file-input-bordered file-input-xs file-input-info  md:w-52 max-w-xs" />

                        <input className='btn btn-sm btn-primary rounded-2xl w-16' type="submit" value="Post" required />

                    </div>


                </form>


            </div>
        </div>
    );
};

export default PostArea;