import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

function Meaning(props) {
        return (
            <div className="Meaning">
        <h3 className="partOfSpeech text-capitalize">{props.meaning.partOfSpeech}</h3>
        <p className="text-capitalize definition">{props.meaning.definition}</p>
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }

export default Meaning;