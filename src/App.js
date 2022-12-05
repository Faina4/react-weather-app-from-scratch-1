
import './App.css';
import Footer from './Footer';
import CurrentCityName from "./CurrentCityName";
import SearchForm from "./SearchForm";
import CurrentCityForecast from "./CurrentCityForecast"
import CurrentDate from "./CurrentDate";
import CurrentDay from "./CurrentDay";
//import CurrentTemperature from "./CurrentTemperature";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Weather-app">

      <div className="location-serch-wrapper row g-3"> 
        
      <div className="col-4">
       <CurrentDate />      
      <CurrentDay /> 
      </div>
      <div className="col-8">
      <SearchForm defaultCity="Kyiv" />
      </div>
    
      <CurrentCityName  /> 
<div className="row ">

<div className="col-3">   
<CurrentCityForecast />
      </div>
<div className="col-3 clearfix current-city-temterature">     

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
