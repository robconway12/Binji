// This is the Watch List Page

import React, { Component } from "react";
import "../App.css";
import WatchList from "./WatchList";

class MainPage extends Component {

handleDelete = event => {
  alert("Clicked!")
}

  // handleDelete = event => {
    // event.preventDefault();
    // alert("clicked");
    // const {id} = event.target;

    // console.log(event.target);
    // console.log(this.state.results);

    // console.log(id);

    // axios.post('/title/delete', id)
  // }

  render() {
    return (
      <>
        <h4>Binji Watch List</h4>
       <WatchList
       handleDelete={this.handleDelete}
       />
      </>
    );
  }
}

export default MainPage;
