import React from 'react';

function SearchBar(){
    return <>
        <div className = "search-bar-container">
        <input className='search-bar' type='text' placeholder='Search for plants, tips and more'></input>
        <button className='search-bar-button'><span class="material-symbols-outlined">search</span></button>
        </div>
        
    </>
}

export default SearchBar;