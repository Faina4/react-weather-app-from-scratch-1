import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import CurrentTemperature from "./CurrentTemperature";

export default function CurrentCityName(){
   return (
     
      <div className="row ">
      <h1 className="col-3 fs-1">Kyiv</h1>
      <div className="col-3"><CurrentTemperature />  </div>
      
      </div>
   )
}