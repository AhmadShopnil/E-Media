import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GoogleLogin from '../../Shared/GoogleLogin';

const Login = () => {
    const { loginWithEmail } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                setError(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <div>
            <div className="flex justify-center min-h-screen ">
                <div className="">
                    <div className=" w-full max-w-md shadow-2xl bg-base-100">
                        <h2 className=' p-4 text-center text-2xl font-bold'>Login</h2>
                        {
                            error && <p className='text-red-600 m-3'>{error}</p>
                        }
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent btn-sm">Login</button>
                            </div>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;