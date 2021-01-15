import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SearchForm from './Components/SearchForm'
import JokeData from './Components/JokeData'


// import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJokes] = useState([]);

 const onClick = (e) => {
   e.preventDefault();
   console.log("click")
    setJokes(joke);
 }
 


useEffect(() => {
  if(!setJokes(joke)){
    console.log("no jokes here");
    return <h2>No joke here. Find a new joke.</h2>
    
  }else{
    return setJokes();
  }
  setJokes();
}, [])
  
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <h1>Search for a Joke</h1>
        
      </div>

      <div className="app-main">
        <h1>Today's Joke: </h1>
        <Main />
        <SearchForm />
        <JokeData />
        <button onClick={onClick} className="get-joke-btn">Generate A Joke</button>
      </div>

      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
