import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css"

function Meaning(props) {
        return (
            <div className="Meaning">
        <h3 className="partOfSpeech text-capitalize fs-3">{props.meaning.partOfSpeech}</h3>
        <p className="text-capitalize definition fs-4">{props.meaning.definition}</p>
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
      </div>
    );
  }

export default Meaning;