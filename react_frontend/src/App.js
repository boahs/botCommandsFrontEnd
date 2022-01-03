import './App.css';
import logo from './images/logo193.png'
import twitchIcon from './images/twitch-icon.svg'
import githubIcon from './images/github-icon.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bot created for Twitch</h2>
      <code>
      <img src={githubIcon} alt="twitch icon" className = "icon" />
            <a 
              classname="App-link"
              href="https://github.com/boahs/Boahs_GamingGalleon_Bot"
              target="_blank"
              rel="noopener noreferrer"
              >BoahsBot</a>
            </code>
        <img src={logo} className="App-logo" alt="logo" />

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
         <img src={twitchIcon} alt="twitch icon" className = "icon" />  Follow Boahs
        </a>
      </header>
    </div>
  );
}

export default App;
