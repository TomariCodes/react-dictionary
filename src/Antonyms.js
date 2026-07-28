import React from "react";

function Antonyms(props) {
  if (!props.antonyms || props.antonyms.length === 0) {
    return null;
  }
  return (
    <p className="antonyms">
      Antonyms: {props.antonyms.join(", ")}
    </p>
  );
}

export default Antonyms;