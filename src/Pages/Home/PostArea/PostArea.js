import React from 'react';

const PostArea = () => {

    const handleAddPost = (event) => {
        event.preventDefault()
        const form = event.target
        const text = form.text.value
        console.log(text)
        form.reset()
    }

    return (
        <div className='my-2 '>
            <div className='flex justify-center gap-6 '>
                <form onSubmit={handleAddPost}>
                    <div className='flex items-center gap-4'>
                        <textarea name='text' className="textarea textarea-info h-14" placeholder="What's in your mind ?"></textarea>
                        <input type="file" className="file-input file-input-bordered file-input-xs file-input-info w-52 max-w-xs" />
                        <input className='btn btn-sm btn-primary rounded-2xl' type="submit" value="Add Post" />

                    </div>

                    {/* <div className=' flex justify-center'>
                        <input className='btn btn-xs mt-3' type="submit" value="Add Post" />
                    </div> */}
                </form>


            </div>
        </div>
    );
};

export default PostArea;