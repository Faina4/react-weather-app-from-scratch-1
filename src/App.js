
import './App.css';
import Footer from './Footer';
import CurrentCityName from "./CurrentCityName";
import SearchForm from "./SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Weather-app">
      Current location
      <div className="location-serch-wrapper row g-3">       
      <div className="col-4">
        <CurrentCityName message={message} />
      </div>
      <div className="col-8">
        <SearchForm />
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
