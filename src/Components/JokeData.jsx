import React, { useState, useEffect } from "react";



 function JokeData({ searchString, lastSearch, url }) {
     console.log(searchString)
    const [jokes, setJokes] = useState([]); 

    const [fetching, setFetching] = useState(false)
    const [joke, setJoke] = useState('')

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        .then((res) => res.json())
        
        .then((res) => { 
            console.log(res)
            setJokes(res);
        
        })
        .catch(console.error)
    }, [fetching]);
    
    const onClick = (e) => {
        e.preventDefault();
        console.log("click")
         setJokes(joke);
      }
    
    return (
        <section className="jokedata-container">
                
                <div className="joke-container">
                    
                    <div className="setup">
                        
                        <h2 id="joke-text">{jokes.setup}</h2>
                        <h2 className="joke-text">{jokes.delivery}</h2>
                        
                   </div>
                    <div className="btns">
                    <button onClick={()=> setFetching(!fetching)} className="get-joke-btn">Generate A Joke</button>   
                    </div>
                </div>
            
        
    
        </section>
   )}

                

export default JokeData; 