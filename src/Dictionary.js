import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";


function Dictionary() {
    let [keyword, setKeyword] = useState("Gauche");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
        setResults(response.data);
    }

    function handleImgsResponse(response) {
      setPhotos(response.data.photos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = `d723abdbd1batbf0d4fo3fa95586fbba`
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        let imgsURL = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`
        axios.get(apiURL).then(handleResponse);
        axios.get(imgsURL).then(handleImgsResponse)
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
          <Results results={results} photos={photos} />
      </div>
    )
}


export default Dictionary;