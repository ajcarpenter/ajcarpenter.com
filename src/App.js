import React, { Component } from 'react';
import './App.css';
import headshot from './images/headshot.jpg';

import Projects from './projects';
import Socials from './socials';

import projectsData from './data/projects';
import socialsData from './data/socials';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">@ajcarpenter</h1>
          <img className="app__headshot" src={headshot} alt="Headshot of Andrew James Carpenter esq."/>
        </header>
        <Socials items={ socialsData } />
        <Projects items={ projectsData } />
      </div>
    );
  }
}




export default App;
