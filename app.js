//// Get date and time


function getTime() {
 let now = new Date();
 let day = now.getDay();
 let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
 ];
 let dayMonth = now.getDate();
 let month = now.getMonth();
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
 let hour = now.getHours();
 if (hour < 10) {
   hour = `0${hour}`;
 }


 let minutes = now.getMinutes();
 if (minutes < 10) {
   minutes = `0${minutes}`;
 }
 let appDate = `${days[day]}, ${dayMonth} ${months[month]} ${hour}:${minutes}`;
 let currentDate = document.querySelector("#date");
 currentDate.innerHTML = appDate;
}
getTime();


///Name of the city after searching
function cityName(event) {
 event.preventDefault();
 let cityDisplay = document.querySelector("#search-bar");
 let currentCity = document.querySelector("h2");
 if (cityDisplay.value) {
   currentCity.innerHTML = cityDisplay.value;
 } else {
   currentCity.innerHTML = null;
   alert("Please type a city");
 }
}


function search(city) {
 let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showTemperature);
}


function handleSubmit(event) {
 event.preventDefault();
 let cityDisplay = document.querySelector("#city-input");
 search(cityDisplay.value);
}


///let searchButton = document.querySelector("#search-button");
///searchButton.addEventListener("click", cityName);
///let cityDisplay = document.querySelector("#search-bar");
///cityDisplay.addEventListener("enter", cityName);
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


/// Bonus - Celsius to Farenheit


function toFahrenheit(event) {
 event.preventDefault();
 let temp = document.querySelector("#current-temp");
 temp.innerHTML = 66;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", toFahrenheit);


/// Bonus - Farenheit to Celsius


function toCelsius(event) {
 event.preventDefault();
 let temp = document.querySelector("#current-temp");
 temp.innerHTML = 19;
}
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", toCelsius);


/// Homework week 5


function showTemperature(response) {
 let temperature = Math.round(response.data.main.temp);
 let h1 = document.querySelector("#temperature");
 h1.innerHTML = `${temperature}°C`;
 let currentCity = document.querySelector("h1");
 currentCity.innerHTML = response.data.name;
}


function showPosition(position) {
 let latitude = position.coords.latitude;
 let longitude = position.coords.longitude;
 let units = "metric";
 let apiKey = "9191fc5bb3e92589a60775c0765348f9";
 let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
 let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
 axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition() {
 navigator.geolocation.getCurrentPosition(showPosition);
}


let button = document.querySelector("#current-city");
button.addEventListener("click", getCurrentPosition);


