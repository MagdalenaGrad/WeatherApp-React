import React from 'react';

const Search = (props) => {
  return (
    <>
      <form className="SearchBar" onSubmit={props.submit}>
        <input type="text" placeholder="city" onChange={props.change}></input>
      </form>
    </>
  )
}

export default Search;