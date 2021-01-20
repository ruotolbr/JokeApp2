import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Links from './Links'

//dummy commit
function Main(props) {
    return (
        <div className="main">
            
            <Route exact path="/" component={Home} />
     
            <Route exact path="/Links" component={Links} />
    
        </div>
    );
}

export default Main;