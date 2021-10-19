import React from 'react';
import '../styles/navbar.css';
import Members from './Members';
import AboutUs from './AboutUs';
import Footer from './Footer';
const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <strong>EAGLION</strong>
            </div>
            <input type="checkbox" id="click"/>
            <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li ><a className="active" href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://auto-joiner-eaglion.herokuapp.com/">Join Community</a></li>
            </ul>
        </nav>
        
        
        <section id="about">
        <h5 className="sec-heading">ABOUT</h5>
            <AboutUs/>
        </section>

       
        <section id="members">
        <h5 className="sec-heading">MEMBERS</h5>
            <Members/>
        </section>

        <section id="contact">
        <h5 className="sec-heading">CONTACT</h5>
            <Footer/>
        </section>
        

    </>
     );
}
 
export default Navbar;