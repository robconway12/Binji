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
    results: [], 
    programType: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log("name: ", name, " value: ", value);
    
    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log("state: ", this.state);
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
    const progType = this.state.programType;
    const query = encodeURI(this.state.search);
    const apiKey = "d03fc0e64d561bfed0fdc80a54d08b43";
    function programType (progType) {
      if (progType ==="movie") {
        return "https://api.themoviedb.org/3/search/movie?api_key="
      } else if (progType === "series"){
        return "https://api.themoviedb.org/3/search/tv?api_key="
      } else {
        return "https://api.themoviedb.org/3/search/multi?api_key="
      }
    };
    var searchURL = programType(progType);

    const url =
      searchURL +
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
    const resultsFound = this.state.results;
    let searchResultsComponent;

    if (resultsFound.length === 0) {
      searchResultsComponent = "";
    } else {
      searchResultsComponent = <SearchResults 
      results={this.state.results}
      handleClick={this.handleClick}
     />;
    }

    return (
      <>
      <div className="container">
        <br/>
        <h3 className="text-center">Add to Watch List</h3>
        <SearchForm 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {searchResultsComponent}
        
      </div>
      </>
    );
  }
}

export default SearchPage;
