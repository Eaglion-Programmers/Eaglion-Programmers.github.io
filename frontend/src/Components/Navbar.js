import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <header>
            <div className="nav-container">
                <nav>
                    <ul>
                        <div id="logo-div">
                            <strong>EAGLION</strong>
                        </div>
                        <div className="links-div">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Members</li>
                            <li>Contact</li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;