import React from 'react'
import classes from './MainNavigation.module.css'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'

const MainNavigation = () => {
  const match = useRouteMatch();
  const location = useLocation();

  console.log(match)
  console.log("MainNavigation", location)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink activeClassName={classes.active} to='/quote'>All Quotes</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/new-quote'>Add a Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation