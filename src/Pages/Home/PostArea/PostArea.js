import React from 'react';

const PostArea = () => {
    return (
        <div className='my-8 '>
            <div className='flex justify-center gap-6 '>
                <form action="">
                    <div className='flex items-center gap-4'>
                        <textarea className="textarea textarea-info" placeholder="What's in your mind ?"></textarea>
                        <input type="file" className="file-input file-input-bordered file-input-xs file-input-info w-90% max-w-xs" />
                    </div>

                    <input className='btn btn-xs mt-3' type="submit" value="Add Post" />
                </form>


            </div>
        </div>
    );
};

export default PostArea;