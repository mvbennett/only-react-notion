import './App.css';
import getApiUrl from './getApiUrl';
import Search from './components/Search';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  const search = async (book) => {
    const url = getApiUrl(book);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.items);
    return data.items;
  }
  // console.log(results);
  results.forEach(result => console.log(result.title));
  // results === undefined ? console.log('no results yet') : console.log(results);
  return (
    <div className="App">
      <h1>Notion Book Injector</h1>
      <Search search={search} setResults={setResults} />
      <h2>Here are your results:</h2>
      <Results results={results}/>
      {results.forEach(result => {
        return <h2>{result.title}</h2>
      })}
    </div>
  );
}

export default App;
