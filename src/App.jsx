import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

// Component imports
import Home from './components/routes/Home';
import About from './components/routes/About';
import Projects from './components/routes/Projects';

const pages = [
  {
    pathname: "/home",
    pagename: "Home"
  },
  {
    pathname: "/about",
    pagename: "About"
  },
  {
    pathname: "/projects",
    pagename: "Projects"
  },
]


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