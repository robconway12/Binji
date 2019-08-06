import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import Footer from "./components/Footer";

class List extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <WatchList />
        <Footer />
      </div>
    );
  }
}

export default List