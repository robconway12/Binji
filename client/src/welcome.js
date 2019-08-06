import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "././components/LandingPage";
import Footer from "././components/Footer";

class Welcome extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default Welcome