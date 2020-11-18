import React, { useEffect, useState } from 'react';
import Route from './components/Route/Route'
import './app.scss';

// Component imports
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Search from './components/Search/Search';

// Constants
import { pages } from './utils/constants'


const App = () => {
  return (
    <div>
      <Nav pages={pages} siteName="Portfolio"/>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/projects" >
        <Projects />
      </Route>
    </div>
  )
}

export default App;