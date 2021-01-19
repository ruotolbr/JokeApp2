import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SearchForm from './Components/SearchForm'
import SearchResults from './Components/SearchResults'
import JokeData from './Components/JokeData'
import Categories from'./Components/Categories'


// import axios from "axios";
import "./App.css";

function App() {
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    //pass the searchstring to getJokes function 
    getJokes(searchString);
  }, []);

  const searchOptions = {
  term: '',
  limit: 30,
  status: 200,
  api: "https://icanhazdadjoke.com/search?term=cat",
  page: 1,
  endpoint: `/search`
  }

 const onClick = (e) => {
   e.preventDefault();
   console.log("click")
    setJokes(joke);
 }
 
 function handleSubmit(e) {
   e.preventDefault();
   getJokes(searchString); 
 }
 const [searchString, setSearchString] = useState(''); 
 function handleChange(e){
   setSearchString(e.target.value);
 }


useEffect(() => {
  if(!setJokes(joke)){
    console.log("no jokes here");
    return <h2>No joke here. Find a new joke.</h2>
    
  }else{
    return setJokes();
  }
 
}, [])

const [joke, setJokes] = useState([]);
function getJokes(searchString){
  searchString = 'dogs';
  const url = `${searchOptions.api}${searchOptions.endpoint}?term=${searchString}&page=${searchOptions.page}`;

  fetch(url)
    .then(response => {
      setJokes(response.data) 
      //Set the searchString in state to an empty string so search bar will be empty again after something is entered
      setLastSearch(searchString);
      setSearchString('');
    }) 
    .catch(console.error); 
  } 
//   useEffect(() => {
//     fetch(`https://icanhazdadjoke.com/search?term=${searchString}`)
//     .then(response => {
//         setJokes(response)
//         console.log(response);
//     })
//     .catch(err => { 
//         console.log(err);
//     });
    
//  }, []);  
  //dummy commit 

  
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <h1>Search for a Joke</h1>
        
      </div>

      <div className="app-main">
        <h1>Today's Joke: </h1>
        <Main />
        <SearchForm 
        lastSearch={lastSearch}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}/>
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
