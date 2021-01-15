import React from 'react';

function SearchResults({ joke }) {

    return (
        <div className="jokeResult">
        
        {joke.map(joke => (
            <div key={joke.id} className="joke-result-setup">
                <h2>{joke.setup}</h2>
                <h2>{joke.delivery}</h2>
            </div>


        ))

        }
            
        </div>
    );
}

export default SearchResults;