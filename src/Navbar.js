import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <header className='' data-aos="fade-right">
                <nav className='container'>
                    <div className={showNavbar ? "navbar mobile-navbar" : "navbar"}>
                        <div className='navLeft '>
                            <NavLink to="/" className='navlink mNavLink'>
                                <div className='nav-heading'>
                                    <div className='navheader'>T</div>
                                    <h3>Treact</h3>
                                </div>
                            </NavLink>
                            <div className='hamburger-menu' onClick={() => setShowNavbar(!showNavbar)}>
                                <NavLink to="#"><GiHamburgerMenu /></NavLink>
                            </div>
                        </div>

                        <div className='navRight'>
                            <ul className={showNavbar ? "navbar-nav mobile-navbar-nav" : "navbar-nav"}>
                                <li className='nav-item'><NavLink to="/about">About</NavLink></li>
                                <li className='nav-item'><NavLink to="/blog">Blog</NavLink></li>
                                <li className='nav-item' ><NavLink to="/service">Services</NavLink></li>
                                <li className='nav-item'><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className={showNavbar ? "sign-up mobile-sign-up" : "sign-up"}>
                            <Link to="/signup"><button className="btn btn-style" >Sign Up</button></Link>
                            <Link to="/login"><button className="btn btn-style btn-style-border" >Login</button></Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;