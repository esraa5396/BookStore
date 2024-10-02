import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar({toggle, setToggle}) {
    return (
        <nav  style={{ left: toggle && "0px" }} className="navbar">
            <ul className="navbar-links">
                <Link to="/" onClick={() => setToggle(false)} className='navbar-link'>Home</Link>
                <Link to="/authors" onClick={() => setToggle(false)} className='navbar-link'>Authors</Link>
                <Link to="/about" onClick={() => setToggle(false)} className='navbar-link'>About Us</Link>
                <Link to="/contact" onClick={() => setToggle(false)} className='navbar-link'>Contact Us</Link>
                <Link to="/register" onClick={() => setToggle(false)} className='navbar-link'>Register</Link>
            </ul>
        </nav>
    )
}
