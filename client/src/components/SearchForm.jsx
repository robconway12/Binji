import React, { Component } from "react";
import "../App.css";
class SearchForm extends Component {
  // Setting the component's initial state


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <form >
        <div className="form-group ml-4 text-center">
        <label id="searchType">
          <h4 className="text-center add">Select program type:</h4>
          <select name="programType" value={this.value} onChange={this.props.handleInputChange}>
            <option value="">Select One</option>
            <option value="series">Series</option>
            <option value="movie">Movie</option>
            <option value="both">Both</option>
            {/* <option value="podcast">Podcast</option> */}
          </select>
        </label>

          <input
            onChange={this.props.handleInputChange}
            name="search"
            type="text"
            className="form-control text-center"
            placeholder="Search for a Title"
            id="search"
          />
          <br/>
          <button
            onClick={this.props.handleFormSubmit}
            className="btn btn-light btn-lg mt-3 text-center"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
