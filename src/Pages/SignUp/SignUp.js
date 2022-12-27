import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        // const photo = form.photo.value
        const password = form.password.value

        const info = {
            name, email, password
        }

        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name)
                alert('Sign Up Success')
            })
            .catch(error => console.error(error))

        const handleUpdateProfile = (userName) => {
            const profile = {
                displayName: userName
            }
            updateUser(profile)
                .then(result => {

                })
                .catch(err => console.error(err))

        }


    }



    return (
        <div >
            <div className=" min-h-screen flex justify-center">
                <div className="">

                    <div className=" w-full max-w-lg shadow-2xl bg-base-100">


                        <form onSubmit={handleSignUp} className="card-body">


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="text" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input name='photo' type="file" className="file-input file-input-bordered file-input-xs file-input-info w-90% max-w-xs" />
                                    </div>
                                </div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">University</span>
                                        </label>
                                        <input name='university' type="text" placeholder="University" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input name='address' type="text" placeholder="Address" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="text" placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="form-control mt-6">
                                <input className='btn btn-sm mt-3' type="submit" value="Sign Up" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;