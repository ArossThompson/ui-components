import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

// Component imports
import Home from './components/routes/Home';
import About from './components/routes/About';
import Projects from './components/routes/Projects';
import Search from './components/Search/Search';

// Constants
import { pages } from './utils/constants';


const App = () => {
  return (
    <Search />
  )
}

export default App;