import React from 'react';
import "./Navigation.css";
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navigation = () => {

const [user, loading, error] = useAuthState(auth);
const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
};
const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bikes">Bikes</Link></li>
        <li><Link to="/service">Service</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
        <li><Link to="/about">About</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-neutral text-white ">
            <div className="navbar-start ">
                <div className="dropdown text-black">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl ml-3">E-Motor Bike</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-center">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navigation;