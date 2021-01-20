import React, { useState, useEffect } from "react";



 function JokeData({ searchString, lastSearch, url }) {
     console.log(searchString)
    const [jokes, setJokes] = useState([]); 
 useEffect(() => {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
    const url = `https://icanhazdadjoke.com/search?term=${searchString}&page=1`
    fetch(url+PROXY_URL, 
        {
        headers: {"Access-Control-Origin": "*"
        }
    }
)
        .then(res => res.json()) 
        .then(json => console.log(json))
      
           .catch(err => { 
               console.log(err)
        },[])
        console.log(jokes)

 }, []);   

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
    const [like, setLike] = useState(false)

   
    
    

    return (
        <section className="jokedata-container">
                
                <div className="joke-container">
                    <div className="search-res">
                    </div>
                    <div className="setup">
                        <h2>{jokes.setup}</h2>
                        <h2>{jokes.delivery}</h2>
                        
                    </div> 
                    <div className="btns">
                    <button onClick={()=> setFetching(!fetching)} className="get-joke-btn">Generate A Joke</button>   
                    <button onClick={onClick} className="like-btn">Like</button> 
                    </div>
                </div>
            
        
    
        </section>
   )}

                

export default JokeData; 