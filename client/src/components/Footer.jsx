import React from "react";
import '../App.css';

const Footer = props => (
  <div className="container" id="footer-container">
      <p id="footer-copyright" className="float-left img-fluid">&#9400; Copyright 2019  Binji</p>
      <img src={require('../images/TMDB-logo.png')} style={{ maxWidth: 120 }} className="float-right mb-2" alt="TMDB Logo" id="tmdb-logo"></img>
  </div>
);

export default Footer;