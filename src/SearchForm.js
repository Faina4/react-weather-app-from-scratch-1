import React, {useState} from "react";
import "./SearchForm.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
//import CurrentCityName from "./CurrentCityName";


export default function SearchForm(){
const [city, setCity]=useState("");
const [cityName, setCityName]=useState("");
const [currentTemperature, setCurrentTemperature]=useState("");
const [description, setDescription]=useState("");
const [humidity, setHumidity]=useState("");
const [windSpeed, setWindSpeed]=useState("");

function showForecast(response){

console.log(response.data);

setCityName(response.data.name);
setCurrentTemperature(Math.round(response.data.main.temp));
setDescription(response.data.weather[0].description);
setHumidity(response.data.main.humidity);
setWindSpeed(response.data.wind.speed);

}
function handleSubmit(event){
   //have to have access to the city
   //make api call
   //update whether UI
   event.preventDefault();
 let apiKey=`d08b5ff65675f4663f3c5d9f116c9748`;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(showForecast);
}

function updateCity(event){    
  //eventListener
  setCity(event.target.value);

 
  }  
 

   return (

   <div  className="container-fluid">
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
        <br />
        <ul className="CurrentForecast">
         <li> City: {cityName} </li>
         <li> Temperature: {currentTemperature} °C; </li>
         <li> Description: {description} ; </li>
         <li> Humidity: {humidity}  %; </li>
         <li> Wind speed: {windSpeed} km/h; </li>
        </ul>
    </form>
    </div>
   )
}