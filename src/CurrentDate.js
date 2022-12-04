function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
   
    let weekDay = weekDays[date.getDay()];
    return `${weekDay}, ${hours}:${minutes}`;
   
  }
  
  function formatDay(timestamp){
  let date=new Date(timestamp*1000);
  let day=date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
  }
export default function CurrentDate(){
   
}