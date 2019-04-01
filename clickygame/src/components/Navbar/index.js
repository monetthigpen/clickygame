import React from "react";
import "./style.css";
import Counter from "../Counter";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
            <a className="navbar-brand" href="#"> Clicky Game</a>
            <span class="navbar-brand mb-0 h1">Click an image to begin!</span>
            {/* <span class="navbar-brand mb-0 h1">Score: {Counter}| Top Score:</span> */}
        </nav>
      
    );
  }
  
  export default Navbar;