import React from "react";

function Example(props) {
  if (!props.example) {
    return null;
  }
  return <p className="example">Ex: {props.example}</p>;
}

export default Example;