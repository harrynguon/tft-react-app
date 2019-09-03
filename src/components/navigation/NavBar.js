import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    console.log(props, 'navbarjs');
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper grey darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo center hide-on-small-only">Teamfight Tactics Data App</Link> 
                    <Link to="/" className="brand-logo center hide-on-med-and-up">TFT Data App</Link> 
                </div>
            </div>
            <div className="nav-content grey">
                { /** Check to see if URL contains champion or not */ }
                <div>
                    <Link to="/" className="breadcrumb"> Home </Link>
                    { getChampName(props.location.pathname, props.location.pathname.indexOf('/champion') > -1) }
                </div>
            </div>
        </nav>
    );
}

const getChampName = (url, championInUrl) => {
    if (!championInUrl) {
        return '';
    }
    const urlAsArray = url.split('/');
    const champName = urlAsArray[urlAsArray.length - 1];
    return <Link to={`/champion/${champName}`} className="breadcrumb">{ champName }</Link> 
;}


// Pass props to NavBar
export default withRouter(NavBar);
