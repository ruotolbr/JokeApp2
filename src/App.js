import React, { useState } from 'react'
import './index'
import JokeData from './Components/JokeData'
// import axios from "axios"; 
import './App.css';




function App() {

  // const [joke, setJoke] = useState(null); 
  
  // const darkJokesApi = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  // const getData = async () => {
  //   const resp = await axios.get(darkJokesApi);
  //   setJoke(resp.data)
  //   console.log(resp.data)

  // };

  return (
    <div className="App">
      <header className="App-header">
        </header>
        <h1>Random Joke App. Haha.</h1>
        
        <h1>Today's Joke: </h1>
        <div>
        <button className="get-joke-btn" >Generate A Joke</button>
        </div>
        <div className="jokes">
          {/* {joke &&
          joke.map((jokes, index) => {
            const jokeSetup = jokes.setup */}

          {/* //   return (
          //     <div className="jokes" key={index}>
          //      <h2>{jokes.setup}</h2>

          //      <div className="delivery">
          //        <h1>{jokeSetup}</h1>
          //        <h2>{jokes.delivery}</h2>
          //       </div>
          //       </div>

          //   );

          // })
        } */}
        
          <JokeData />
        
        </div> 
    </div>
  );
}

export default App;
