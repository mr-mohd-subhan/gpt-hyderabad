import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="College logo" />
            <h1>GOVERNMENT POLYTECHNIC, HYDERABAD, MASAB TANK</h1>
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/courses" className="nav-link">Courses</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
