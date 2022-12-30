import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GoogleLogin from '../../Shared/GoogleLogin';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const imageHostKeyImagebb = process.env.REACT_APP_IMGBB_API_KEY
    // const [userPhoto, setUserPhoto] = useState()
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const address = form.address.value
        const university = form.university.value
        const password = form.password.value

        const image = form.UserPhoto.files[0]


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
                    // setUserPhoto(photoData.data.url)
                    const userPhoto = photoData.data.url
                    const userInfo = {
                        name, email, password, address, university, userPhoto
                    }

                    createUser(email, password)
                        .then(result => {
                            handleUpdateProfile(name, userPhoto)
                            setError(null)
                            alert('Sign Up Success')
                        })
                        .catch(error => {
                            setError(error.message)
                        })

                    const handleUpdateProfile = (userName, userPhoto) => {
                        const profile = {
                            displayName: userName,
                            photoURL: userPhoto
                        }
                        updateUser(profile)
                            .then(result => {
                                handleSaveUserDatabase(userInfo)
                                navigate('/')
                            })
                            .catch(err => console.error(err))
                    }
                }
            })
    }


    const handleSaveUserDatabase = (user) => {

        fetch(`https://e-media-server.vercel.app/saveUser`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(err => console.error(err))
    }

    return (
        <div >
            <div className=" min-h-screen flex justify-center">
                <div className="">
                    <div className=" w-full max-w-lg shadow-2xl bg-base-100">
                        <h2 className=' pt-4 text-center text-2xl font-bold'>Sign Up</h2>
                        {
                            error && <p className='text-red-600 m-3'>{error}</p>
                        }
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="text" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input name='UserPhoto' type="file" className="file-input file-input-bordered file-input-xs file-input-info  md:w-52 max-w-xs" required />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">University</span>
                                        </label>
                                        <input name='university' type="text" placeholder="University" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input name='address' type="text" placeholder="Address" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="text" placeholder="Password" className="input input-bordered" required />

                                    </div>

                                </div>
                            </div>

                            <p>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                            <div className="form-control mt-6">
                                <input className='btn btn-accent btn-sm mt-3' type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;