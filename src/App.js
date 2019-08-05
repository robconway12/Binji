import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MainPage from "././components/MainPage";
import Footer from "././components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
