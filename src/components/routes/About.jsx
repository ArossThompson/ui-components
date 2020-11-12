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


const About = () => {
  return (
    <Nav pages={pages} siteName="Portfolio" selected={"/about"}/>
  )
}

export default About;