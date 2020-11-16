let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10){
    hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10){
    minute = `0${minute}`;
}

let currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = `${day} ${hour}:${minute}`;

function currentTemperature(response){
    let currentCity = document.querySelector(".current-city");
    let cityId = document.querySelector("#cityId");
    let currTemp = Math.round(response.data.main.temp);
currentCity.innerHTML = `${cityId.value} <div>${currTemp}°C<div>`;
}

function findButton(){
    let apiKey = "1e7ad6ff012b71c9934450ff735183f3";
    let cityId = document.querySelector("#cityId");
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityId.value}&appid=${apiKey}&&units=metric`;
   
    axios.get(apiUrl).then(currentTemperature)
    }
let button = document.querySelector(".btn");
button.addEventListener("click", findButton);

 function currPosition(position){
            let apiKey = "1e7ad6ff012b71c9934450ff735183f3";
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=metric`;
      
        console.log(latitude);
        console.log(longitude);
        axios.get(apiUrl).then(currTemperature);
        }
function currTemperature(response){
            let currentCity = document.querySelector(".current-city");
            let currTemp = Math.round(response.data.main.temp);
             let cityId = response.data.name;
           currentCity.innerHTML = `${cityId} <div>${currTemp}°C<div>`;
        }
function cityNow(){
    navigator.geolocation.getCurrentPosition(currPosition)
}

let cityLink = document.querySelector("#currCityLink");
cityLink.addEventListener("click", cityNow);

function TFahrenheit(){
    let currentCity = document.querySelector(".current-city");
    let cityId = document.querySelector("#cityId");
    let monday = document.querySelector(".temp-Mon");
    let tuesday = document.querySelector(".temp-Tue");
    let wednesday = document.querySelector(".temp-Wed");
    let thursday = document.querySelector(".temp-Thu");
    let friday = document.querySelector(".temp-Fri");
    currentCity.innerHTML = `${cityId.value} <div>66°F<div>`;
    monday.innerHTML = `54-64°F`;
    tuesday.innerHTML = `52-68°F`;
    wednesday.innerHTML = `48-57°F`;
    thursday.innerHTML = `59-75°F`;
    friday.innerHTML = `50-66°F`;
};
let tempFahrenheit = document.querySelector("#tempFahrenheit");
tempFahrenheit.addEventListener("click", TFahrenheit);

function TCelsius(){
    let currentCity = document.querySelector(".current-city");
    let cityId = document.querySelector("#cityId");
    let monday = document.querySelector(".temp-Mon");
    let tuesday = document.querySelector(".temp-Tue");
    let wednesday = document.querySelector(".temp-Wed");
    let thursday = document.querySelector(".temp-Thu");
    let friday = document.querySelector(".temp-Fri");
    currentCity.innerHTML = `${cityId.value} <div>17°C<div>`;
    monday.innerHTML = `12-18°C`;
    tuesday.innerHTML = `11-20°C`;
    wednesday.innerHTML = `9-14°C`;
    thursday.innerHTML = `15-24°C`;
    friday.innerHTML = `10-19°C`;
};

let tempCelsius = document.querySelector("#tempCelsius");
tempCelsius.addEventListener("click", TCelsius);
