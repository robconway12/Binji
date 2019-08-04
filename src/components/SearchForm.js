import React, { Component } from "react";

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

//This is where the request goes

    this.setState({
      query: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
 <form>
      <div className="form-group">
        
        <input
          onChange={this.handleInputChange}
          value={this.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Title"
          id="search"
        />
        <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
    );
  }
}


export default SearchForm;