import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <strong>EAGLION</strong>
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li ><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://auto-joiner-eaglion.herokuapp.com/">Join Community</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;