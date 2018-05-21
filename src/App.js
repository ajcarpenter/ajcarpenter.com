import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">@ajcarpenter</h1>
        </header>
        <ul className="App-external">
          <li className="App-external-item">
            <a href="https://github.com/ajcarpenter" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="App-external-item">
            <a href="https://twitter.com/ajcarpenter" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="App-external-item">
            <a href="https://www.facebook.com/ajcarpenter" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="App-external-item">
            <a href="https://www.instagram.com/ajcarpenter/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="App-external-item">
            <a href="https://www.linkedin.com/in/andrew-carpenter-24450b14/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}




export default App;
