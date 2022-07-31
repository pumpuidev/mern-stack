import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';
 
const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          SCOUTS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY EVENTS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">NEW EVENT</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}
      { 
      auth.isLoggedIn && (
        <li>
          <NavLink to="/teams">TEAMS</NavLink>
        </li>
      )
      }
      {
      auth.isLoggedIn && (
        <li>
          <NavLink to="/players">PLAYERS</NavLink>
        </li>
      )
      }
      {
      auth.isLoggedIn && (
        <li>
          <NavLink to="/comparison">COMPARISON</NavLink>
        </li>
      )
      }
      



      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
