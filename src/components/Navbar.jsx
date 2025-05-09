import React from 'react';
import '../styles/Navbar.css';

const Navbar= ()=>(
    <nav className="navbar">
        <h2 className='logo'>My Portfolio</h2>
        <ul>
            <li><a href='#hero'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#story">Journey</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

export default Navbar;