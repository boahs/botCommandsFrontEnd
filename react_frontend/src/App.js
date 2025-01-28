import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/dozenmaster.png';
import twitchIcon from './images/twitch-icon.svg';
import githubIcon from './images/github-icon.svg';

function App() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    document.title = "DirtyDozen Bot";

    const timer = setInterval(() => {
      // Current time in UTC
      const nowUtc = new Date().getTime();

      // Target date: February 1, 2025, at midnight Eastern Time (ET)
      const targetDate = new Date('February 1, 2025 05:00:00 GMT+0000').getTime();

      // Calculate the difference
      const diff = targetDate - nowUtc;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Countdown to Next Dirty Dozen: {countdown}</h2>
        <h2>Bot created for The Dirty Dozen</h2>
        <section className="botStatus">
  <p>
    Bot Status: <span className="onlineText">Online</span>
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
            <p>TBA!</p>
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
        >
          <img src={twitchIcon} alt="Twitch icon" className="icon" />Boahs
        </a>
      </header>
    </div>
  );
}

export default App;
