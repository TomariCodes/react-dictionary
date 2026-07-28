import React from "react";

function Meaning(props) {


    if (props.meaning.example) {

        return (
            <div className="Meaning">
        <h3 className="partOfSpeech text-capitalize">{props.meaning.partOfSpeech}</h3>
        <p className="text-capitalize definition">{props.meaning.definition}</p>
        <p className="text-capitalize example-para">Ex: {props.meaning.example}</p>
      </div>
    );
} else {
    return (
      <div className="Meaning">
        <h3 className="partOfSpeech text-capitalize">{props.meaning.partOfSpeech}</h3>
        <p className="text-capitalize definition">{props.meaning.definition}</p>
      </div>
    );
}
}

export default Meaning;