import React from "react";
import '../App.css';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

class SearchResults extends Component {
 
       render() {

        
    return (
      <div id="results-container">
        <ResultList results={this.state.results} />
      </div>
    );
  }
}


export default SearchResults;