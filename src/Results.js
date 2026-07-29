import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css"

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
      <div className="results-phonetic">
      <div className="results-container">
        <h2 className="word text-capitalize">{props.results.word}</h2>
        <Phonetic phonetic={props.results.phonetic} />
              </div>
      </div>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
