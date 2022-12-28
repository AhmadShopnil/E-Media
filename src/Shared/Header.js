import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        navigate('/login')
    }

    const menuItem =
        <div className='md:flex gap-3'>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/media'>Media</Link></li>
            <li> <Link to='/message'>Message</Link></li>
            <li> <Link to='/about'>About</Link></li>
            {
                user?.uid ?
                    <>
                        {/* <li><Link className='"btn btn-outline btn-accent' onClick={handleLogOut} to='/login'>Log Out</Link></li> */}
                        <button onClick={handleLogOut} to='/login' className="btn btn-outline btn-primary btn-sm mt-2">Log Out</button>
                    </>
                    :
                    <>
                        <li> <Link to='/login'>Login</Link></li>
                        <li> <Link to='/signup'>Sign Up</Link></li>
                    </>
            }
        </div>

    return (
        <div className=''>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">E-Media</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-12">
                        <img className="mask mask-circle" src={user?.photoURL} />
                    </div>

                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button"></label> */}
                </div>
            </div>
        </div>
    );
};

export default Header;