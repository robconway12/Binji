import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';


const NavBar = props => (
  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a className="navbar-brand" href="/" id="nav-BinjiLogo">Binji</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item"><Link to={'/app'} className="nav-link" id="nav-search">Search</Link></li>
        <li className="nav-item"><Link to={'/watchlist'} className="nav-link" id="nav-watchlist">Watch List</Link></li>
    </ul>
  </div>
</nav>
)

export default NavBar;