import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/dozenmaster.png';
import twitchIcon from './images/twitch-icon.svg';
import githubIcon from './images/github-icon.svg';

function App() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    document.title = "DirtyDozen Bot";

    const updateCountdown = () => {
      const nowUtc = new Date();
      const currentYear = nowUtc.getUTCFullYear();
      
      const eventStart = new Date(Date.UTC(currentYear, 1, 1, 5, 0, 0));
      const eventEnd = new Date(Date.UTC(currentYear, 2, 1, 5, 0, 0));

      if (nowUtc >= eventStart && nowUtc < eventEnd) {
        setCountdown(
          <a 
            href="https://www.twitch.tv/the_gaming_galleon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'white', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              backgroundColor: 'red',
              padding: '10px 20px',
              borderRadius: '8px',
              display: 'inline-block'
            }}
          >
            NOW!!!!
          </a>
        );
      } else {
        const nextFeb = new Date(Date.UTC(currentYear + 1, 1, 1, 5, 0, 0));
        const diff = nextFeb - nowUtc;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Countdown to Next Dirty Dozen: {countdown}</h2>

        <a 
          className="App-link"
          href="https://www.twitch.tv/the_gaming_galleon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <img src={twitchIcon} alt="Twitch icon" className="icon" />
          Official Dirty Dozen Masters Channel
        </a>

        <h2>Bot created for The Dirty Dozen</h2>
        <section className="botStatus">
          <p>
            Bot Status: <span className="onlineText">ONLINE</span>
          </p>
        </section>

        <code>
          <img src={githubIcon} alt="GitHub icon" className="icon" />
          <a 
            className="App-link"
            href="https://github.com/boahs/Boahs_GamingGalleon_Bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            DirtyDozen Bot
          </a>
        </code>

        <img src={logo} className="App-logo" alt="logo" />
        <section className="SMALLSECONDHEADER">
          Click triangle dropdown for list of all commands
        </section>
        
        <section className="LIST">
          <details>
            <summary>Commands</summary>
            <h3>General Commands</h3>
            <p>!commands</p>
            <p>!pan</p>
            <p>!voyage</p>
            <p>!dirtydozen</p>
            <p>!ggtv</p>
            <p>!deals</p>

            <h3>Dirty Dozen 2025</h3>
            <p>!naruto</p>
            <p>!rebelraiders</p>
            <p>!lotr</p>
            <p>!dah2</p>
            <p>!tmblack</p>
            <p>!dynastywarriors4</p>
            <p>!nanobreaker</p>
            <p>!pinball_hof</p>
            <p>!dualhearts</p>
            <p>!mgs2</p>
            <p>!kingdomhearts</p>
            <p>!atvoffroadfury</p>

            <h3>Dirty Dozen 2024</h3>
            <p>!psychoPinball</p>
            <p>!psychoMotor</p>
            <p>!fightersHistory</p>
            <p>!stones</p>
            <p>!dizzy</p>
            <p>!solaris</p>
            <p>!hunter</p>
            <p>!ignition</p>
            <p>!worms</p>
            <p>!streetChallenge</p>
            <p>!earthwormJim</p>
            <p>!cybattler</p>

            <h3>Dirty Dozen 2023</h3>
            <p>!007</p>
            <p>!blood</p>
            <p>!spiderman</p>
            <p>!xfiles</p>
            <p>!specops</p>
            <p>!ff8</p>
            <p>!echo</p>
            <p>!medievil</p>
            <p>!tm4</p>
            <p>!bigrace</p>
            <p>!needforspeed</p>
            <p>!jampack</p>

            <h3>Dirty Dozen 2022</h3>
            <p>!thps</p>
            <p>!wario</p>
            <p>!potd</p>
            <p>!roadrash</p>
            <p>!spyro</p>
            <p>!yugioh</p>
            <p>!mariotennis</p>
            <p>!tekken</p>
            <p>!dejavu</p>
            <p>!tmnt</p>
            <p>!grinch</p>
            <p>!dbz</p>

            <h3>Dirty Dozen 2021</h3>
            <p>!jungle</p>
            <p>!shining</p>
            <p>!xmen</p>
            <p>!crueball</p>
            <p>!bio</p>
            <p>!nhl</p>
            <p>!chakan</p>
            <p>!carnage</p>
            <p>!champions</p>
            <p>!sonic</p>
            <p>!light</p>
            <p>!mercs</p>
          </details>
        </section>

        <a
          className="App-link"
          href="https://twitch.tv/boahs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '20px', fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <img src={twitchIcon} alt="Twitch icon" className="icon" /> Created by - Boahs
        </a>
      </header>
    </div>
  );
}

export default App;
