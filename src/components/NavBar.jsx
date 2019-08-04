import React from "react";
import '../App.css';

const NavBar = props => (
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a className="navbar-brand" href="/" id="nav-BinjiLogo">Binji</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/" id="nav-tv">TV<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" id="nav-movies">Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" id="nav-podcasts">Podcasts</a>
      </li>
    </ul>
  </div>
</nav>
)

export default NavBar;