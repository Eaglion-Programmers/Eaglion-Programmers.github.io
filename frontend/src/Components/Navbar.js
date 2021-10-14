import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <strong>EAGLION</strong>
            </div>
            <input type="checkbox" id="click"/>
            <label for="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li ><a className="active" href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <section id="about">

        </section>
        <section id="members">

        </section>
        <section id="contact">

        </section>
        

    </>
     );
}
 
export default Navbar;