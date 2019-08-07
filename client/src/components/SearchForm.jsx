import React, { Component } from "react";
import "../App.css";
class SearchForm extends Component {
  // Setting the component's initial state


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <form >
        <div className="form-group ml-4 text-center">
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
            className="btn btn-primary mt-3 text-center"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
