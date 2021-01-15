import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className="nav-container">
          <div className="navbar">
         <Link to="/Home" className="nav-link">Home</Link>
         <Link to="/Categories" className="nav-link">Categories</Link>
        </div>   
    </div>
    );
}

export default Nav;