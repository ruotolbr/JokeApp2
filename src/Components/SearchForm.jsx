import React, { useState  } from 'react';
// import JokeData from './Components/JokeData'
// import SearchResults from './SearchResults'


function SearchForm({ handleSubmit, handleChange, searchString, lastSearch }) {
    
    const searchClick = () => {
    }
    const [search, setSearch ] = useState('');


    return (
        <div className= "searchform-container ">
            <form onSubmit={handleSubmit} className="searchForm-form">
                <div className="searchbar">
                <input type="text" 
                className="search-bar" 
                placeholder="Search joke by topic..."
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
                >
                
                </input>
                <div>{searchString}</div>
                </div>
                <button type="submit" onClick={ (e) => {
                    e.preventDefault()
                    console.log("search button clicked!")
                    searchClick()
                }}
                className= "search-btn" placeholder="search">Search</button>
                </form> 
                
            
            
        </div>
    );
}

export default SearchForm;