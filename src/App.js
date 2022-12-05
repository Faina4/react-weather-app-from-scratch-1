
import './App.css';
import Footer from './Footer';
//import CurrentCityName from "./CurrentCityName";
import SearchForm from "./SearchForm";
//import CurrentCityForecast from "./CurrentCityForecast"
import CurrentDate from "./CurrentDate";
import CurrentDay from "./CurrentDay";
//import CurrentTemperature from "./CurrentTemperature";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Weather-app">
            <div className="dateNtime p-1 m-0">
 <CurrentDate />      
      <CurrentDay /> 
            </div>
 
      <div className="location-serch-wrapper row g-3 "> 
     
      <h1 className="col-4 fs-1 current-city-name"> city name</h1>
      
      <div className="col-8">
      
      <SearchForm defaultCity="Kyiv" />
      </div>
    
      <div className="row overview mt-3 mb-2 mx-2 p-1 ">
     
      <div className="col-3 "> </div>
      
      <div className="col-3 fs-5 d-flex current-forecast-icon">   Forecast icon
      <img src="http://openweathermap.org/img/wn/03n@2x.png" alt="clear" class="d-flex" id="icon"></img>
       </div>
      <div className="col-3  fs-5  current-forecast"> Current City Forecast </div>
      </div>
<div className="row next-days-forecast d-flex m-3 p 1">

<div className="col-2 d-flex next-day">  
<ul>
<li className="weather-forecast-date"> Mon</li>
<li>  <img src=" http://openweathermap.org/img/wn/04d@2x.png" alt="" id="icon" width="36" /> </li>
 <li className="weather-forecast-temperature"> 
 <span className="weather-forecast-temperature-day">  -4°</span>  
 <span className="weather-forecast-temperature-night"> -6° </span> 
 </li>
</ul>
 </div>
<div className="col-2 d-flex next-day">  
<ul>
<li className="weather-forecast-date"> Mon</li>
<li>  <img src=" http://openweathermap.org/img/wn/04d@2x.png" alt="" id="icon" width="36" /> </li>
 <li className="weather-forecast-temperature"> 
 <span className="weather-forecast-temperature-day">  -4°</span>  
 <span className="weather-forecast-temperature-night"> -6° </span> 
 </li>
</ul>
 </div>
<div className="col-2 d-flex next-day">  
<ul>
<li className="weather-forecast-date"> Mon</li>
<li>  <img src=" http://openweathermap.org/img/wn/04d@2x.png" alt="" id="icon" width="36" /> </li>
 <li className="weather-forecast-temperature"> 
 <span className="weather-forecast-temperature-day">  -4°</span>  
 <span className="weather-forecast-temperature-night"> -6° </span> 
 </li>
</ul>
 </div>
<div className="col-2 d-flex next-day">  
<ul>
<li className="weather-forecast-date"> Mon</li>
<li>  <img src=" http://openweathermap.org/img/wn/04d@2x.png" alt="" id="icon" width="36" /> </li>
 <li className="weather-forecast-temperature"> 
 <span className="weather-forecast-temperature-day">  -4°</span>  
 <span className="weather-forecast-temperature-night"> -6° </span> 
 </li>
</ul>
 </div>
<div className="col-2 d-flex next-day">  
<ul>
<li className="weather-forecast-date"> Mon</li>
<li>  <img src=" http://openweathermap.org/img/wn/04d@2x.png" alt="" id="icon" width="36" /> </li>
 <li className="weather-forecast-temperature"> 
 <span className="weather-forecast-temperature-day">  -4°</span>  
 <span className="weather-forecast-temperature-night"> -6° </span> 
 </li>
</ul>
 </div>
                  


</div>
     
      </div>
      </header>
      <footer>
       <Footer />
      </footer>

    </div>
  );
}

export default App;
