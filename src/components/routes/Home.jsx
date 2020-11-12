import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component imports
import Nav from '../Nav/Nav';
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


const Home = () => {
  return (
    <Nav pages={pages} siteName="Portfolio"/>
  )
}

export default Home;