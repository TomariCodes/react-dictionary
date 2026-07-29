import React from "react";

function Example(props) {
  if (!props.example) {
    return null;
  }
  return <p className="example fs-6">Ex: {props.example}.</p>;
}

export default Example;