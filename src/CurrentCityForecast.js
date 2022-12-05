//import React from "react";
import "./CurrentCityForecast.css"
import "./SearchForm"
import "bootstrap/dist/css/bootstrap.min.css";



export default function CurrentCityForecast(currentForecast){
    return (
      <ul className="CurrentCityForecast px-0 fs-6">
      
      <li> City:  </li>
        <li> Temperature:  °C; </li>
        <li> Description:  ; </li>
        <li> Humidity:   %; </li>
        <li> Wind speed: km/h; </li>
        <li> <img src="" alt="Weather Icon" /> </li>
     
       </ul>

     
     
      );
}