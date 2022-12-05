import React, {useState} from "react";
import "./SearchForm.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



export default function SearchForm(){
const [city, setCity]=useState("");
const [loaded, setLoaded]=useState(false);
const [currentForecast, setCurrentForecast ]=useState({});

function showForecast(response){
setLoaded(true);
setCurrentForecast({
cityName: response.data.name,
temperature: Math.round(response.data.main.temp),
description: response.data.weather[0].description,
humidity: response.data.main.humidity,
wind: response.data.wind.speed,
icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
})
}
function searchCity(){
  const apiKey=`d08b5ff65675f4663f3c5d9f116c9748`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  
  axios.get(apiUrl).then(showForecast);
}

function handleSubmit(event){
   //have to have access to the city
   //make api call
   //update whether UI
   event.preventDefault();
searchCity()
}

function updateCity(event){      //eventListener
  setCity(event.target.value); 
  }  

  let form = (
    <form className="CitySearchForm d-flex form-parameters" role="search" onSubmit={handleSubmit} >
    <input   
     type="search"
     placeholder="Type a city ..."
     className="form-control me-2 border border-custom flex-grow-1"
    autoComplete="off"
    onChange={updateCity}>
     </input>
     <input  type="submit"
     value="Search"
     className=" btn btn-outline-light border-custom flex-shrink-5 "
     id="search-button"
     >
     </input>
    </form>
  );
 
if(loaded){
  return (
    <div>
      {form}
      <br />
      <ul className="CurrentForecast">
      
       <li> City: {currentForecast.cityName} </li>
         <li> Temperature: {Math.round(currentForecast.temperature)} °C; </li>
         <li> Description: {currentForecast.description} ; </li>
         <li> Humidity: {currentForecast.humidity}  %; </li>
         <li> Wind speed: {currentForecast.wind} km/h; </li>
         <li> <img src={currentForecast.icon} alt="Weather Icon" /> </li>
      
        </ul>
    </div>
  );
} 
    else{
      return form
    }
} 
