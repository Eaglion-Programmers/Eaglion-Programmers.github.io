import React from 'react';
import '../styles/navbar.css';


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
                    <li><a href="https://auto-joiner-eaglion.herokuapp.com/">Join Community</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;