import React from 'react';
import Nav  from './Nav'

function Header(props) {
    return (
        <div className="header-container">
            <h1>Header</h1>
        <Nav />
{/*         
        <div className="header">
        <div>
        <h1>Joke APP: Header</h1>
        </div>
         <Nav />   
        </div>     */}
     </div>
    );
}

export default Header;