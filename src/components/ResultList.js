import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
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
      {props.results.map(program => (
           
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
        
        ))}
        </tbody>
      </table>
    </ul>
  );
}

export default ResultList;
