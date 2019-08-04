import React from "react";
import '../App.css';

const LandingPage = props => (
  <div id="landing-container">
      <img src={require('../images/TMDB-logo.png')} style={{ maxWidth: 400 }} className="float-right mb-2" alt="TMDB Logo" id="tmdb-logo"></img>
  </div>
);

export default LandingPage;