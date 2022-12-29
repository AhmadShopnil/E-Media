import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import EditAboutModal from './EditAboutModal';

const About = () => {
    const { user } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState({})
    const [reload, setReload] = useState(false)
    const [modal, setModal] = useState(true)

    useEffect(() => {
        fetch(`https://e-media-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setUserDetails(data.data)
                }
            })
            .catch(err => console.error(err))
    }, [reload])


    // const handleOpenMOdal = () => {
    //     setModal(true)
    // }
    // const handleCloseMOdal = () => {
    //     setModal(false)
    // }


    return (
        <div className=' w-full min-h-screen'>
            <div className='border-2 md:w-1/2 mx-auto p-6'>
                <div className='flex justify-between items-center'> <img className=" w-28 mask mask-circle" src={userDetails?.userPhoto} />
                    <label htmlFor="my-modal-3" className="btn btn-outline btn-primary btn-sm">Edit Profile</label>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{userDetails?.name}
                                </td>

                            </tr>

                            <tr>
                                <td>University</td>
                                <td>{userDetails?.university}</td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td>{userDetails?.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {
                    modal && <EditAboutModal key={userDetails?._id} userDetails={userDetails} reload={reload} setReload={setReload}></EditAboutModal>
                }
            </div>
        </div>
    );
};

export default About;