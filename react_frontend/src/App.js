import './App.css';
import logo from './images/logo193.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>BoahsBot</code> master command list
        </p>
        <section className = "SMALLSECONDHEADER">
          Click triangle for dropdown of all commands
        </section>
        <section className = "LIST">
          <details>
        <summary>
        Commands
        </summary>
        <li>!commands</li>
        <li>!pan</li>
        <li>!jungle</li>
        <li>!shining</li>
        <li>!xmen</li>
        <li>!crueball</li>
        <li>!bio</li>
        <li>!nhl</li>
        <li>!chakan</li>
        <li>!carnage</li>
        <li>!champions</li>
        <li>!sonic</li>
        <li>!light</li>
        <li>!mercs</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!game1</li>
        <li>!voyage</li>
        <li>!dirtydozen</li>
        <li>!ggtv</li>
        <li>!2021Dozen</li>
        <li>!deals</li>

          </details>
          </section>
        <a
          className="App-link"
          href="https://twitch.tv/boahs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Boahs
        </a>
      </header>
    </div>
  );
}

export default App;
