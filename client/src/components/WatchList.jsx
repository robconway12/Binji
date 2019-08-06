// This page is the Watch List db results

import React from "react";

class WatchList extends React.Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, query the db for watchlist
  componentDidMount() {
    var express = require("express");
    var router = express.Router();

    console.log("Component did mount");
    /* GET show listing. */
    router.get("/", function(req, res, next) {
      res.locals.connection.query("SELECT * from programs", function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        res.send(JSON.stringify(results));
      });
    });

  }

  render() {
    var props = "";
    return (
      <table className="table mx-auto">
        <thead>
            <th>Media Type</th>
            <th>Title</th>
            {/* <th>Genre</th>  */}
            <th>Release Date</th>
            <th>Poster</th>
            <th>Summary</th>
            <th>Delete</th>
            
        </thead>
        <tbody>

{this.props.results.map((each, index) => {
  var imgBaseURL =  "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  return (
    <tr>
      <td>{each.media_type}</td>
      <td>{each.title}</td>
      <td>{each.release_date}</td>
      <td>
        <img src={imgBaseURL + each.poster_path} alt="" className="poster" />
      </td>
      <td>{each.overview}</td>
      <td>
        <a
          href={"/title/delete/:" + each.id}
          id={each.id}
          className="btn btn-danger deleteBtn"
        >
          Delete
        </a>
      </td>
    </tr>
    )})}

        </tbody>
      </table>
    );
  }
}

export default WatchList;
