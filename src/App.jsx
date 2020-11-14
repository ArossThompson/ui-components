import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

// Component imports
import Home from './components/routes/Home';
import About from './components/routes/About';
import Projects from './components/routes/Projects';
import Search from './components/Search/Search';

// Constants
import { pages } from './utils/constants'


const App = () => {
  return (
    <main>
      <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
      </Switch>
    </main>
  )
}

export default App;