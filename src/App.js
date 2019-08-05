import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "././components/MainPage";
import Footer from "././components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
