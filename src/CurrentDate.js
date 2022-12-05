import React from "react";

export default function CurrentDate() {
  let now = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let currentMonth = months[now.getMonth()];
  let currentDate = now.getDate();
  let currentYear = now.getFullYear();

  return (
    <div className="CurrentDate">
     <strong> {currentMonth} {currentDate}, {currentYear}{" "}</strong>
    
    </div>
  );
}
