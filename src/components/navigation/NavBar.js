import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to="/" className="brand-logo center">TFT App</Link> 
        </div>
    </nav>
  );
}

// Pass props to NavBar
export default withRouter(NavBar);
