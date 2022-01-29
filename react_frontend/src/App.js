import './App.css';
import logo from './images/logo193.png'
import twitchIcon from './images/twitch-icon.svg'
import githubIcon from './images/github-icon.svg'
import {useEffect} from 'react'
import {gsap, TweenMax} from "gsap";


function App() {


  TweenMax.to("h2", 1, {"--myColor":"orange", yoyo:true, repeat:20});


//   useEffect(() => {
//   gsap.to(".test", {
//     duration: 1,
//     scale: 1.5,
//     y: 40,
//     ease: "power1.inOut",
//     stagger: {
//       grid: [7,15],
//       from: "center",
//       amount: 1.5
//     }
//   });
// });



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
        <li>!commands</li>
        <li>!pan</li>
        <li>!voyage</li>
        <li>!dirtydozen</li>
        <li>!ggtv</li>
        <li>!deals</li>
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
