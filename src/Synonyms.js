import React from "react";

function Synonyms(props) {
  if (!props.synonyms || props.synonyms.length === 0) {
    return null;
  }
  return (
    <p className="synonyms">
      Synonyms: {props.synonyms.join(", ")}
    </p>
  );
}

export default Synonyms;