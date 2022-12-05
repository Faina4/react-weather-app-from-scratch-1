import React from "react";

export default function CurrentDay() {
    let now = new Date();

    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let weekDay = weekDays[now.getDay()];
  
    let currentHour = now.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMinutes = now.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
    let currentDate = now.getDate();
   
  
    return (
      <div className="CurrentDayNTime">

          {weekDay}, {currentHour}:{currentMinutes}{" "}
    
       
      </div>
    );
  }
  