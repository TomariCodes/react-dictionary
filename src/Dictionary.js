import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";


function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

  function handleResponse(response) {
        setResults(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = `d723abdbd1batbf0d4fo3fa95586fbba`
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              className="form-input"
              placeholder="Enter a word"
            onChange={handleKeywordChange}
            />
            <button type="submit" className="btn btn-submit">
              Search
            </button>
          </form>
          <Results results={results} />
      </div>
    )
}


export default Dictionary;