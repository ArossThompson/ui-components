import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';

import Search from '../Search/Search';

const Nav = ({ pages, siteName}) => {
  
  // Update which nav element has active-route styling applied to it
  const [activeRoute, setActiveRoute] = useState(window.location.pathname)
  const updateActive = (e) => {
    setActiveRoute(e.target.pathname);
  }

  const navPages = pages.map((page, index) => {
    return (
      <li 
        onClick={updateActive}
        key={index}
        className={page.pathname === activeRoute ? "active" : ""}
      >
        <Link href={page.pathname}>{page.pagename}</Link>
      </li>
      
    )
  });
  
  return (
    <nav className="navbar navbar-default topnav">
      <div className="container-fluid nav-container">
        <div className="navbar-header">
          <Link className="navbar-brand" href="/home">{siteName}</Link>
        </div>
        <ul className="nav navbar-nav">
          {navPages}
        </ul>
      </div>
    </nav>
  )
  
}

export default Nav;