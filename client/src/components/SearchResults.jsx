// This component will display the results from the API query

import React, { Component } from "react";
import "../App.css";
import API from "../utils/API";

class SearchResults extends Component {
  render() {
    // var each = "";
    return (
      <>
        <h4 className="text-center searchResult">Search Results</h4>
        <table className="table mx-auto">
          <thead>
            <th>Media Type</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Cover Art</th>
            <th>Summary</th>
            <th />
          </thead>
          <tbody>
            {/* React code to map through database info */}
            {this.props.results.map((each, index) => {
              var imgBaseURL =
                "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
              return (
                <tr>
                  {each.media_type === "movie" ? (
                    <td className="fas fa-film" />
                  ) : (
                    <td class="fas fa-tv" />
                  )}
                  {each.title ? <td>{each.title}</td> : <td>{each.name}</td>}
                  {each.release_date ? (
                    <td>{each.release_date}</td>
                  ) : (
                    <td>{each.first_air_date}</td>
                  )}
                  <td>
                    <img
                      src={imgBaseURL + each.poster_path}
                      alt=""
                      className="poster"
                    />
                  </td>
                  <td>{each.overview}</td>
                  <td>
                    <a
                      href={"/title/add/:" + each.id}
                      id={each.id}
                      className="btn deleteBtn btn-primary"
                    >
                      Add
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default SearchResults;
