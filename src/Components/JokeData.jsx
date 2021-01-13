import React, { useState, useEffect } from "react";



 function JokeData(props) {
    const [jokes, setJokes] = useState([]); 

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        .then((res) => res.json())
        .then((res) => {
            setJokes(res);
        })
        .catch(console.error)
    }, []);

    return (
        <section className="container">
            {jokes.map((joke) => {
                return(
                <div className="card">
                    <div className="setup">
                        <h1>{joke.setup}</h1>
                    </div>
                    <div className="delivery">
                        <h1>{joke.delivery}</h1>
                    </div>      
                </div>
            );
        })
    }
        </section>
    );
}

export default JokeData; 