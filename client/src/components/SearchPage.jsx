// This is the search and search results page

import React, { Component } from "react";
import "../App.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import axios from "axios";

class SearchPage extends Component {
  // Setting the component's initial state
  state = {
    search: "", 
    results: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log(name, value);
    
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleClick = event => {
    event.preventDefault();
    const {id} = event.target;

    console.log(event.target);
    console.log(this.state.results);

    const matchingResult = this.state.results.find((result) => {

      return result.id === parseInt(id);
    })

    console.log(matchingResult);

    axios.post('/title/add', matchingResult)
    alert("Program Added!");
    
    
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const query = encodeURI(this.state.search);
    const apiKey = "d03fc0e64d561bfed0fdc80a54d08b43";
    const url =
      "https://api.themoviedb.org/3/search/multi?api_key=" +
      apiKey +
      "&language=en-US&query=" +
      query +
      "&page=1&include_adult=false";
      console.log(url);
      

    axios
      .get(url)
      .then(response => {
 
        this.setState({
          results: response.data.results
        });
        console.log(this.state.results);

      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
      <div className="container">
        <br/>
        <h5 className="text-center add">Add to Watch List</h5>
        <SearchForm 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults 
          results={this.state.results}
          handleClick={this.handleClick}
        />
      </div>
      </>
    );
  }
}

export default SearchPage;
