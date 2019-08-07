// This is the Watch List Page

import React, { Component } from "react";
import "../App.css";
import WatchList from "./WatchList";

class MainPage extends Component {

  render() {
    return (
      <>
        <h4>Binji Watch List</h4>
       <WatchList/>
      </>
    );
  }
}

export default MainPage;
