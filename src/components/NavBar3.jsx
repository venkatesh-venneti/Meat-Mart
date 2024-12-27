import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './NavBar3.css';
import logo_light from '../assets/logo-black.png';

const NavBar3 = () => {
    return (
        <div className="navbar">
            <img src={logo_light} alt="Logo" />
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/bootstrpcart">B-Cart</Link></li>
            </ul>
        </div>
    );
};
export default NavBar3;
