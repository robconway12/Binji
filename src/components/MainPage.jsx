import React, { Component } from "react";
import "../App.css";
import { program } from "@babel/types";
import SearchForm from "./SearchForm";

class MainPage extends Component {
  // Setting the component's initial state
  state = {
    query: "",
    response: ""
  };
  
  render() {
    return (
      <>
        <h5>Add to Watch List</h5>
        <SearchForm />
        <h4>Binji Watch List</h4>
        <table className="table mx-auto">
          <thead>
            <tr>
              <th>TMDB ID</th>
              <th>Title</th>
              {/* <th>Genre</th>  */}
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
              <td>{program.title}</td>
              {/* <td>{program.genre}</td>  */}

              <td>{program.year}</td>
              <td>
                <img src={program.imgURL} alt="" />
              </td>
              <td>{program.overview}</td>
              <td>
                <a
                  href="/title/delete/:"
                  id={program.progID}
                  className="btn btn-danger deleteBtn"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default MainPage;
