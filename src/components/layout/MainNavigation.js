import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Best quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to='/quotes'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-quote'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Add a quote
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
