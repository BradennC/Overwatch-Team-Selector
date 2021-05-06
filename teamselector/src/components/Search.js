import React from 'react';

const Search = ({ searchHandler }) => (
    <input onChange={searchHandler} placeholder="Find a hero" />
)

export default Search;