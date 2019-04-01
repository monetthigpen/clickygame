import React from "react";
import "./style.css";

function Jumbrotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
            <h1 className="display-4"><b>Clicky Game</b></h1>
            <p className="lead"><b>Click on an image to earn points, but don't click on any more than once!</b></p>
            </div>
      </div>
      
    );
  }
  
  export default Jumbrotron;