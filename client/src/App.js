import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchPage />
        <Footer />
      </div>
    );
  }
}

export default App;
