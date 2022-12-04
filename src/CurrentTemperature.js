import React from "react";
import "./CurrentTemperature.css"


export default function CurrentTemperature() {
  return (
    <span className="clearfix ">
      <img
        src="#"
        alt="clear"
        className="float-left"
        id="icon"
      />
      <span className="float-left p-1">
        <strong >
        21 </strong>
        <span className="units d-inline" >
          <a href="#" id="celsius-link">
            °C
          </a>
        </span>
       
      </span>
    </span>
  );
}
