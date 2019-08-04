import React from "react";
import '../App.css';

const NavBar = props => (
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a class="navbar-brand" href="#" id="nav-BinjiLogo">Binji</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="nav-tv">TV<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="nav-movies">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="nav-podcasts">Podcasts</a>
      </li>
    </ul>
  </div>
</nav>
)

export default NavBar;