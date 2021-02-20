import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="uk-navbar">
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo">
          ToDo's
          </Link>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/create">
              <span uk-icon="icon: plus; ratio: 1.2"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;