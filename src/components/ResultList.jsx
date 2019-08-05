// This page is the Watch List db results

import React from "react";

function ResultList(props) {
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

export default ResultList;
