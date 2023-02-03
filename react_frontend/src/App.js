import './App.css';
import logo from './images/dozenmaster.png'
import twitchIcon from './images/twitch-icon.svg'
import githubIcon from './images/github-icon.svg'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    document.title = "BoahsBot"
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bot created for Twitch</h2>
      <code>
      <img src={githubIcon} alt="twitch icon" className = "icon" />
            <a 
              className="App-link"
              href="https://github.com/boahs/Boahs_GamingGalleon_Bot"
              target="_blank"
              rel="noopener noreferrer"
              >BoahsBot</a>
            </code>
        <img src={logo} className="App-logo" alt="logo" />

        <section className = "SMALLSECONDHEADER">
          Click triangle dropdown for list of all commands
        </section>
        <section className = "LIST">
          <details>
        <summary>
        Commands
        </summary>
        <h3>General Commands</h3>
        <li>!commands</li>
        <li>!pan</li>
        <li>!voyage</li>
        <li>!dirtydozen</li>
        <li>!ggtv</li>
        <li>!deals</li>
        <h3>Dirty Dozen 2023</h3>        
        <li>!007</li>
        <li>!blood</li>
        <li>!spiderman</li>
        <li>!xfiles</li>
        <li>!specops</li>
        <li>!final</li>
        <li>!echo</li>
        <li>!medievil</li>
        <li>!tm4</li>
        <li>!bigrace</li>
        <li>!needspeed</li>
        <li>!jampack</li>
        <h3>Dirty Dozen 2022</h3>
        <li>!thps</li>
        <li>!wario</li>
        <li>!pinball</li>
        <li>!roadrash</li>
        <li>!spyro</li>
        <li>!yugioh</li>
        <li>!mariotennis</li>
        <li>!tekken</li>
        <li>!dejavu</li>
        <li>!tmnt</li>
        <li>!grinch</li>
        <li>!dbz</li>
        <h3>Dirty Dozen 2021</h3>
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
          </details>
          </section>
       
        <a
          className="App-link"
          href="https://twitch.tv/boahs"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={twitchIcon} alt="twitch icon" className = "icon" />Boahs
        </a>
        
      </header>
    </div>
  );
}

export default App;
