// This is the search and search results page

import React, { Component } from "react";
import "../App.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class SearchPage extends Component {
  // Setting the component's initial state
  state = {
    query: "",
    response: ""
  };
  
  render() {
    return (
      <>
      <div className="container">
        <br/>
        <h5 className="text-center add">Add to Watch List</h5>
        <SearchForm />
        <SearchResults />
      </div>
      </>
    );
  }
}

export default SearchPage;
