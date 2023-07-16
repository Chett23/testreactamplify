import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am become app, destroyer of ram.
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Oppenheimer_(film)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
