import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [refresh, setRefresh] = useState(false)
    const [loading, setLoading] = useState(true)

    // Create user by email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // login with email password
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()

    }, [])

    // update User Data
    const updateUser = (profile) => {

        return updateProfile(auth.currentUser, profile)

    }

    // Log Out
    const logOut = () => {
        signOut(auth)
            .then(result => {

            })
            .catch(err => console.error(err))
    }



    const authInfo = {
        user,
        refresh,
        loading,
        signInWithGoogle,
        setLoading,
        setRefresh,
        createUser,
        loginWithEmail,
        updateUser,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;