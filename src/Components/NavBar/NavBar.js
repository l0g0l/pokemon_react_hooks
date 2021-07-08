import React from 'react';
import { Link } from 'react-router-dom';


import './navbar.css'

function NavBar() {
    return (
        <div className="navbar">
            <Link to='/'>Search Pokemon</Link>
            <Link to='/new'>Create Pokemon</Link>
            <Link to='/pokemon/:id'>Pokemon Details</Link>
        </div>
    )
}

export default NavBar
