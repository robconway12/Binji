import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class WatchList extends Component {
  render() {
    return (
      <div>
        <NavBar />
        Results here
        <Footer />
      </div>
    );
  }
}

export default WatchList