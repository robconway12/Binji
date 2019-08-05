import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchResultContainer from "./components/SearchResultContainer";
import Footer from "./components/Footer";

class SearchResults extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchResultContainer />
        <Footer />
      </div>
    );
  }
}

export default SearchResults