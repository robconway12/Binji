// This is the Watch List Page

import React, { Component } from "react";
import "../App.css";
import WatchList from "./WatchList";

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
       <WatchList />
      </>
    );
  }
}

export default MainPage;
