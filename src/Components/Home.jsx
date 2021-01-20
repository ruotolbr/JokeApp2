import React, { Component, useState } from 'react';
import JokeData from './JokeData.jsx';



class Home extends Component {
    render(){
        return <div></div>
    }
}
function RandomJokes() {
    const [joke, setJokes] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        console.log("click")
         setJokes(joke);
      }
    return (
        <div className="home">
            <h1><Home /></h1>
            <h2><JokeData /></h2>
        </div>
    );
}


export default RandomJokes;