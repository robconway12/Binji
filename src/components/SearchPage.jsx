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
        <h5>Add to Watch List</h5>
        <SearchForm />
        <SearchResults />
      </>
    );
  }
}

export default SearchPage;
