// This page is the Watch List db results

import React from "react";
import axios from "axios";
import { useTable, useSortBy } from 'react-table';

class WatchList extends React.Component {

  constructor(){
    super()

    this.state = {
      results: []
    };
    this.deleteTitle = this.deleteTitle.bind(this)
  }

  // When this component mounts, query the db for watchlist
  componentDidMount() {
    axios.get("/watchlist").then(response => {
      this.setState({
        results: response.data
      });
      console.log(this.state.results);
    });
  }

  handleSortChange(value){
    
  }


  // handleDelete = event => {
  //   event.preventDefault();
  //   const {id} = event.target;
  //   axios.post('/title/delete', id)
  // }

  deleteTitle(id) {
    const data = {
      id: id
    };
    console.log("data = ", data);

    axios
      .get("/delete", {
        method: "POST",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        if (data === "success") {
          this.setState({ msg: "Title has been deleted." });
        }
      })
      .catch(function(err) {
        console.log(err);
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
              <th>Sort By:
              <select name="sort" value={this.value} onChange={this.props.handleSortChange}>
            <option value="progID">Program ID</option>
            <option value="title">Title</option>
            <option value="mediaType">Media Type</option>
            <option value="releaseDate">Release Date</option>
            
          </select>

              </th>
              
            </tr>
            {this.state.results.map((program, index) => {
              var imgBaseURL =
                "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
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
                      onClick={() => this.deleteTitle(program.progID)}
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
