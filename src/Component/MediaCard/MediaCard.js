import React from 'react';
import { Link } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';

const MediaCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Link to='/postDetails' className='btn btn-outline btn-info btn-sm'>Details</Link>
                </div>
                <div className='mb-4'>
                    <AddComment></AddComment>
                </div>
            </div>

        </div>
    );
};

export default MediaCard;