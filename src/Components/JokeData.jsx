import React, { useState, useEffect } from "react";
import axios from 'axios'


 function JokeData({ props, searchString, lastSearch }) {
    const [jokes, setJokes] = useState([]); 
 useEffect(() => {
    axios.get('https://icanhazdadjoke.com/search?term=cats')
        .then(res => {
                console.log(res)
            })
           .catch(err => { 
               console.log(err)
        })
    fetch(`https://icanhazdadjoke.com/search?term=${searchString}`)
    .then(response => {
        setJokes(response)

        console.log(response);
    })
    .catch(err => { 
        console.log(err);
    });
    
 }, []);   
  
    
    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        .then((res) => res.json())
        
        .then((res) => { 
            console.log("res", res)
            setJokes(res);
            
        })
        .catch(console.error)
    }, []);
    

    return (
        <section className="container">
                
                <div className="joke-container">
                    <div className="search-res">
                        {
                            jokes.map(joke => <div key={joke.searchString}></div>)
                        }
                    </div>
                    <div className="setup">
                        <h2>{jokes.setup}</h2>
                    </div> 
                    <div className="delivery">
                        <h2>{jokes.delivery}</h2>
                    </div>     
                </div>
            
        
    
        </section>
   )}

                

export default JokeData; 