import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditAboutModal = ({ userDetails, reload, setReload }) => {


    const handleEditProfile = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const address = form.address.value
        const university = form.university.value

        const updatedInfo = {
            name, address, university, userEmail: userDetails?.email
        }

        console.log(updatedInfo)

        fetch(`https://e-media-server.vercel.app/updateUserInfo/${userDetails._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setReload(!reload)
                    alert('Update Success')

                }
            })
            .catch(error => {

            })


    }



    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">Edit Profile</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleEditProfile} className='grid grid-cols-1 gap-4 my-4'>
                        <input name='name' type="text" defaultValue={userDetails?.name} placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                        <input name='address' type="text" defaultValue={userDetails?.address} placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" />
                        <input name='university' type="text" defaultValue={userDetails?.university} placeholder="University" className="input input-bordered input-primary w-full max-w-xs" />
                        <input className='btn ' type="submit" value="Save Changes" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditAboutModal;