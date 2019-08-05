import React from "react";
import "../App.css";

const LandingPage = props => (
  <div class="container">
  <div className="container" id="cover">
    <div className="row">
      <div className="hp-blurb">
        <img
          src={require("../images/logo-square-lg-white.png")}
          style={{ maxWidth: 280 }}
          className="img-fluid mx-auto"
          alt="Binji TV Logo"
          id="binji-logo"
        />
        <h1>Search it. Binge it. Share it, Betches.</h1>
        <br/>
        <a className="btn btn-primary btn-xlg" href="/app">
            Get Started
        </a>
      </div>
    </div>
  </div>
  </div>
);

export default LandingPage;
