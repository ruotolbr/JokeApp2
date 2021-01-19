import React from 'react';
import SearchForm from './SearchForm'

function Categories(props) {


    const onClick =() => {
        
        console.log("categories button clicked!")
    }
    return (
        <div>
            
            <div className="categories-btn" onClick={onClick}>Categories</div>
            
        </div>
    );
}

export default Categories;