// This is the Watch List Page

import React, { Component } from "react";
import "../App.css";
// import { program } from "@babel/types";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

class MainPage extends Component {
  // Setting the component's initial state
  state = {
    query: "",
    response: ""
  };
  
  render() {
    return (
      <>
        <h4>Binji Watch List</h4>
       <ResultList />
      </>
    );
  }
}

export default MainPage;
