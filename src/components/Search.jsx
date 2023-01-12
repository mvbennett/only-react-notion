import React from "react";
import { useState } from "react";

const Search = ({search, setResults}) => {
  const [input, setInput] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    const searchResults = await search(input);
    console.log(searchResults);
    const parsedResults = [];
    searchResults.forEach((result) => {
      if (result.volumeInfo.authors !== undefined && result.volumeInfo.description !== undefined) {
        parsedResults.push(result.volumeInfo);
      }
    });
    setResults(parsedResults);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setInput(e.target.value)} placeholder="Type a book title or author name here" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
