import React, { useState, useEffect } from "react";



 function JokeData(props) {
    const [jokes, setJokes] = useState([]); 
    
    fetch("https://jokes.p.rapidapi.com/jod?category=%3Crequired%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokes.p.rapidapi.com",
		"x-rapidapi-key": "d9682ccc8cmshe85f76f0d389e1bp164bcajsn27ca1493b51c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

    
    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        .then((res) => res.json())
        
        .then((res) => { 
            // console.log("res", res)
            setJokes(res);
            
        })
        .catch(console.error)
    }, []);
    console.log(jokes)

    return (
        <section className="container">
                
                <div className="joke-container">
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