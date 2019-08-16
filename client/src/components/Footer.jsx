import React, { Component } from "react";
import "../App.css";

class Footer extends Component {

  handeleScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handeleScroll);
  }
  render() {
    return (
      <div className="fixed-bottom" id="footer-container">
       <div>
         <button onClick={this.topFunction} id="myBtn" className="fal fa-caret-square-up" title="Go to top"></button>
         </div> 
         <div>
        <p id="footer-copyright" className="float-left img-fluid padding">
          &#9400; Copyright 2019 Binji
        </p>
        <img
          src={require("../images/TMDB-logo.png")}
          style={{ maxWidth: 120 }}
          className="float-right mb-2 padding"
          alt="TMDB Logo"
          id="tmdb-logo"
        />
        </div>
      </div>
    );
  }
}

export default Footer;

