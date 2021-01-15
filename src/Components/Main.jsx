import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
//dummy commit
function Main(props) {
    return (
        <div className="main">
            
            <Route exact path="/ComponentA" component={Home} />
            <Route exact path="/ComponentB" component={Categories} />
    
        </div>
    );
}

export default Main;