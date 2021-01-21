import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import JokeData from './Components/JokeData'


// import Home from './Components/Home'
import axios from "axios";
import "./App.css";

function App() {
  const [lastSearch, setLastSearch] = useState([]);

  useEffect(() => {
    axios.get(`https:/https://icanhazdadjoke.com/search?term=${searchOptions.search_term}`)
    .then(response => setLastSearch(response));
    //pass the searchstring to getJokes function 
    getJokes(searchString);
  }, []);

  const searchOptions = {
  search_term: '',
  limit: 30,
  status: 200,
  headers: {'Accept': 'application/json'},
  api: "https://icanhazdadjoke.com/",
  page: '1',
  endpoint: `/search`
  }

//  const onClick = (e) => {
//    e.preventDefault();
//    console.log("click")
//     setJokes(joke);
//  }
 
 function handleSubmit(e) {
   e.preventDefault();
   getJokes(searchString); 
 }
 const [searchString, setSearchString] = useState('dogs'); 
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
 
  const url = `${searchOptions.api}${searchOptions.endpoint}?term=${searchString}&page=${searchOptions.page}`;

  fetch(url)
    .then(response => {
      setJokes(response.data) 
      //Set the searchString in state to an empty string so search bar will be empty again after something is entered
      setLastSearch(searchString);
      
      setSearchString(lastSearch);
      
      console.log(searchString);
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
        
         
      </div>
      
      <div className="app-main">
        <Main/>
      </div>
         
      <div className="app-footer">
        
      </div>
    </div>
  );
}

export default App;
