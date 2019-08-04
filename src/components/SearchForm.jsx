import React, { Component } from "react";
import axios from "axios";
class SearchForm extends Component {
  // Setting the component's initial state
  state = {
    query: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

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

    axios
      .get(url)
      .then(response => {
        let data = {
          results: response.data.results
        };

        this.setState(data.results);
        console.log(data.results);
      })
      .catch(error => console.log(error));
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <form>
        <div className="form-group ml-4">
          <input
            onChange={this.handleInputChange}
            value={this.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Title"
            id="search"
          />
          <button
            onClick={this.handleFormSubmit}
            className="btn btn-primary mt-3"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
