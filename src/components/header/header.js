import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '@/assets/img/logo.png'

import './header.css'

const Header = () => {
    return (
        <header className='header'>

            <div className='logo'>
                <NavLink to="/home" className='nav-logo'><img loading="lazy" src={Logo} alt="logo-du-site" /></NavLink>
                <h1>HRnet</h1>
            </div>
            <nav className='navigation-bar'>
                <NavLink to="/home" className="nav-link" style={({ isActive }) => isActive ? { backgroundColor: "#93AD18" } : { backgroundColor: "unset" }}>
                    <p className="nav-item">View Employees</p>
                </NavLink>
                <span>|</span>
                <NavLink to="/create-employee" className="nav-link" style={({ isActive }) => isActive ? { backgroundColor: "#93AD18" } : { backgroundColor: "unset" }}>
                    <p className="nav-item">Create Employee</p>
                </NavLink>
            </nav>

        </header>
    );
};

export default Header;