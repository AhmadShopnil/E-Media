import React from 'react';
import AddComment from '../../Component/AddComment/AddComment';

const PostDetails = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s" alt="" />
                <div>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus nisi expedita eum autem dignissimos cupiditate saepe modi quidem sequi?</p>
                </div>
            </div>
            <AddComment></AddComment>
        </div>
    );
};

export default PostDetails;