import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Welcome from "./welcome";      //landing page with Binji welcome
import App from "./App";              //search page (from API)
import List from "./list";  //watch list page (from SQL database)
import Results from "./results";      //results of the search (from API)
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/app" component={App} />
      <Route path="/results" component={Results} />
      <Route path="/list" component={List} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
