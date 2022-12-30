import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const GoogleLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                const userInfo = {
                    name: user.displayName,
                    email: user?.email,
                    userPhoto: user?.photoURL,
                    address: 'No Address',
                    university: 'No University'
                }
                handleSaveUserDatabase(userInfo)
                navigate('/')
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
        <div className='flex w-100 justify-center'>
            <button onClick={handleGoogleSignIn} className='btn btn-sm mb-3 btn-primary'>Google Login</button>
        </div>
    );
};

export default GoogleLogin;