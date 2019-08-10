// This page is the Watch List db results

import React from "react";
import axios from "axios";

class WatchList extends React.Component {
  state = {
    results: []
  };

  // When this component mounts, query the db for watchlist
  componentDidMount() {
    
    axios.get("/watchlist").then(response => {
      this.setState({
        results: response.data
      });
      console.log(this.state.results);
    });
  }

  
  // handleDelete = event => {
  //   event.preventDefault();
  //   const {id} = event.target;
  //   axios.post('/title/delete', id)
  // }

  deleteMember(id){
    var data = {
        id: id
    }
    fetch("/title/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        if(data === "success"){
           this.setState({msg: "Title has been deleted."});  
        }
    }).catch(function(err) {
        console.log(err)
    });
}
  render() {
    return (
      <>
      <h4 className="text-center">Watch List</h4>
      <table className="table mx-auto">
        <tbody>
          <tr>
            <th>Media Type</th>
            <th>Title</th>
            {/* <th>Genre</th>  */}
            <th>Release Date</th>
            <th>Poster</th>
            <th>Summary</th>
            <th></th>
          </tr>
          {this.state.results.map((program, index) => {
            var imgBaseURL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
            return (
              <tr key={program.progID}>
                {program.media_type === "movie" ? (
                  <td className="fas fa-film" />
                ) : (
                  <td className="fas fa-tv" />
                )}

                <td>{program.title}</td>
                <td>{program.year}</td>
                <td>
                  <img
                    src={imgBaseURL + program.poster}
                    alt=""
                    className="poster"
                  />
                </td>
                <td className="desc">{program.description}</td>
                <td>
                  <div
                    id={program.progID}
                    // onClick={this.handleDelete}
                    onClick={() => this.deleteMember(this.id)}
                    className="btn btn-danger deleteBtn"
                  >
                    Delete
                  </div>
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

export default WatchList;
