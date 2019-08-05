// This component will display the results from the API query

import React from "react";
import "../App.css";
class SearchResults extends Component {
  render() {
    return (
      <>
        <h4>Search Results</h4>
        <table className="table mx-auto">
          <thead>
            <tr>
              <th>TMDB ID</th>
              <th>Media Type</th>
              <th>Title</th>
              <th>Release Date</th>
              <th>Cover Art</th>
              <th>Summary</th>
              <th>Delete</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* React code to map through database info */}
            <tr>
              <td>{program.progID}</td>
              <td>{program.media_type}</td>
              <td>{program.title}</td>
              <td>{program.year}</td>
              <td>
                <img src={program.imgURL} alt="" />
              </td>
              <td>{program.overview}</td>
              <td>
                <a
                  href="/title/add/:"
                  id={program.progID}
                  className="btn deleteBtn"
                >
                  Add to List
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default SearchResults;
