import React from "react";
import "./SearchForm.css"
import "bootstrap/dist/css/bootstrap.min.css";
//import CurrentCityName from "./CurrentCityName";


export default function SearchForm(){


  
   return (
   <div  className="container-fluid">
 
    <form className="d-flex form-parameters" role="search" >

       <input   
        type="search"
        placeholder="Type a city ..."
        className="form-control me-2 border border-custom flex-grow-1"
       autoComplete="off">
        </input>

        <input  type="submit"
        value="Search"
        className=" btn btn-outline-light border-custom flex-shrink-5 "
        id="search-button"
        >
        </input>
        
    </form>
    </div>
   )
}