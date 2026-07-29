import React from "react";

function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="Phonetic">
      <h3>/{props.phonetic.replace(",", " ")}/</h3>
    </div>
  );
} else {
    return null;
  }
}


export default Phonetic;