
import './App.css';
import Footer from './Footer';
import CurrentCityName from "./CurrentCityName";
import SearchForm from "./SearchForm";
import CurrentCityForecast from "./CurrentCityForecast"
import CurrentDate from "./CurrentDate";
import CurrentTemperature from "./CurrentTemperature";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Weather-app">
   <CurrentDate />
      <div className="location-serch-wrapper row g-3">       
      <div className="col-4 fs-1">
        <CurrentCityName />
      </div>
      <div className="col-8">
      <SearchForm />
      </div>
<div className="row ">
<div className="col-3">   
<CurrentCityForecast />
      </div>
<div className="col-3 clearfix current-city-temterature">     
<CurrentTemperature /> 
      </div>
<div className="col-3">      
      </div>
<div className="col-3">  
     
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
