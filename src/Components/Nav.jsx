import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className="nav-container">
          <div className="navbar">
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/Links" className="nav-link">Links</Link>
        </div>   
    </div>
    );
}

export default Nav;