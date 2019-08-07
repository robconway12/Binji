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
  

  render (){
    var each = "";
    var imgBaseURL = "";

    return (
      <table className="table mx-auto">
        <tbody>
          <tr>
              <th>Media Type</th>
              <th>Title</th>
              {/* <th>Genre</th>  */}
              <th>Release Date</th>
              <th>Poster</th>
              <th>Summary</th>
              <th>Delete</th>
              
          </tr>
          {this.state.results.map((program, index) => {
            var imgBaseURL =  "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
            return (
              <tr>
                <td>{program.mediaType}</td>
                <td>{program.title}</td>
                <td>{program.year}</td>
                <td>
                  <img src={imgBaseURL + program.poster} alt="" className="poster" />
                </td>
                <td>{program.overview}</td>
                <td>
                  <a
                    href={"/title/delete/" + program.progID}
                    id={program.progID}
                    className="btn btn-danger deleteBtn"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )}

  }

      
//     );
//   }
// }

export default WatchList;
