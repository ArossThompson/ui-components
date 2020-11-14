import React, { useEffect, useState } from 'react';

// Component imports
import Nav from '../Nav/Nav';
import Search from '../Search/Search';

// Constants
import { pages } from '../../utils/constants'

const Home = () => {
  return (
    <div>
      <Nav pages={pages} siteName="Portfolio" selected={"/home"}></Nav>
      <Search/>
    </div>
    
  )
}

export default Home;