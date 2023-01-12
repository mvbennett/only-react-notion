import React from "react";
import ResultCard from "./ResultCard";

const Results = ({results}) => {
  return(
    <div className="results">
      {results.map(result => {
        return <ResultCard result={result} key={result.title} />
      })}
    </div>
  );
};

export default Results;
