// This page is the Watch List db results

import React, { Component } from "react";

class WatchList extends React.Component {
  state = {
    search: "",
    results: []
  };
  // When this component mounts, query the db for watchlist
  // componentDidMount() {
  //   var express = require("express");
  //   var router = express.Router();

  //   console.log("Component did mount");
  //   /* GET users listing. */
  //   router.get("/", function(req, res, next) {
  //     res.locals.connection.query("SELECT * from members", function(
  //       error,
  //       results,
  //       fields
  //     ) {
  //       if (error) throw error;
  //       res.send(JSON.stringify(results));
  //     });
  //   });

  // }

  render() {
    var props = "";
    return (
      <table className="table mx-auto">
        <thead>
          <tr>
            <th>TMDB ID</th>
            <th>Media Type</th>
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
          {/* {props.results.map(props => ( */}

          <tr>
            <td>{props.progID}</td>
            <td>{props.media_type}</td>
            <td>{props.title}</td>
            {/* <td>{props.genre}</td>  */}

            <td>{props.year}</td>
            <td>
              <img src={props.imgURL} alt="" />
            </td>
            <td>{props.overview}</td>
            <td>
              <a
                href="/title/delete/:"
                id={props.progID}
                className="btn btn-danger deleteBtn"
              >
                Delete
              </a>
            </td>
          </tr>

          {/* )) */}
          {/* } */}
        </tbody>
      </table>
    );
  }
}

export default WatchList;
