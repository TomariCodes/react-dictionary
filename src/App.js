import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="main">
      <header className="App-header">
          <h1>Dictionary App</h1>
          <h2>What word do you want to look up?</h2>
        </header>
        <Dictionary />
        <footer>
          <p className="text-center mt-5">
            This project was coded by
            <a
              href="https://tomaritech.com"
              rel="noreferrer"
              target="_blank"
            >{" "}
              Tomari Southern
            </a>
            {" "}
            is
            {" "}
            <a
              href="https://github.com/TomariCodes/react-dictionary"
              rel="noreferrer"
              target="_blank"
            >{" "}
              open-sourced on Github
            </a>
            {" "}
            and is
            {" "}
            <a
              href="https://tomaris-react-dictionary.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
