import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="Nav">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/Students" className="nav-link" activeClassName="active">Students</NavLink>
            <NavLink to="/Contact" className="nav-link" activeClassName="active">Contact Us</NavLink>
        </div>
    );
}

export default Navbar;