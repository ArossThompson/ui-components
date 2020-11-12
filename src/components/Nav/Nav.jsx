import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Nav = ({ pages, siteName }) => {

  const [activePage, setActivePage] = useState("/home")

  
  const navPages = pages.map((page, index) => {
    return (
      <li 
        key={index}
        className={page.pathname === activePage ? "active" : ""}
        onClick={() => {
          setActivePage(page.pathname)
          console.log(page.pathname)
        }}
      >
        <Link to={page.pathname}>{page.pagename}</Link>
      </li>
      
    )
  })
  
  
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/home">{siteName}</Link>
        </div>
        <ul className="nav navbar-nav">
          {navPages}
        </ul>
      </div>
    </nav>
  )
  
}

export default Nav;