import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div className="wrap">
      <div className="header">
        <h1>Weather App</h1>
      </div>
      <form className="form-search" onSubmit={props.submit}>
        <input className="search-bar" type="text" placeholder="Your city, e.g. Warsaw" onChange={props.change}></input>
        <button onSubmit={props.submit}><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Search;