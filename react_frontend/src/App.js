import './App.css';
import logo from './images/dozenmaster.png'
import twitchIcon from './images/twitch-icon.svg'
import githubIcon from './images/github-icon.svg'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    document.title = "DirtyDozen Bot"
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
              >DirtyDozen Bot</a>
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
        <br></br>
        !commands
        <br></br>
        !pan
        <br></br>
        !voyage
        <br></br>
        !dirtydozen
        <br></br>
        !ggtv
        <br></br>
        !deals
        <br></br>
        <h3>Dirty Dozen 2024</h3>
        <br></br>
        TBA
        <h3>Dirty Dozen 2023</h3>
        <br></br>        
        !007
        <br></br>
        !blood
        <br></br>
        !spiderman
        <br></br>
        !xfiles
        <br></br>
        !specops
        <br></br>
        !ff8
        <br></br>
        !echo
        <br></br>
        !medievil
        <br></br>
        !tm4
        <br></br>
        !bigrace
        <br></br>
        !needforspeed
        <br></br>
        !jampack
        <br></br>
        <h3>Dirty Dozen 2022</h3>
        <br></br>
        !thps
        <br></br>
        !wario
        <br></br>
        !potd
        <br></br>
        !roadrash
        <br></br>
        !spyro
        <br></br>
        !yugioh
        <br></br>
        !mariotennis
        <br></br>
        !tekken
        <br></br>
        !dejavu
        <br></br>
        !tmnt
        <br></br>
        !grinch
        <br></br>
        !dbz
        <br></br>
        <h3>Dirty Dozen 2021</h3>
        <br></br>
        !jungle
        <br></br>
        !shining
        <br></br>
        !xmen
        <br></br>
        !crueball
        <br></br>
        !bio
        <br></br>
        !nhl
        <br></br>
        !chakan
        <br></br>
        !carnage
        <br></br>
        !champions
        <br></br>
        !sonic
        <br></br>
        !light
        <br></br>
        !mercs
        <br></br>
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
