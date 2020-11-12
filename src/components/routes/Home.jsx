import React, { useEffect, useState } from 'react';

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
    <Nav pages={pages} siteName="Portfolio" selected={"/home"}/>
  )
}

export default Home;