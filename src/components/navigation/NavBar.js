import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper black">
                <div className="container">
                    <Link to="/" className="brand-logo center">TFT App</Link> 
                </div>
            </div>
            <div className="nav-content grey">
                <div>{ props.match.url === '/' ? 'Home' : 'Other' }</div>
            </div>
        </nav>
    );
}

// Pass props to NavBar
export default withRouter(NavBar);
