function formatDate(timestamp){
let now = new Date(timestamp);

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
return `${day} ${hour}:${minute}`;

}

function FormatHour(timestamp){
    let now = new Date(timestamp);
    let hour = now.getHours();
if (hour < 10){
    hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10){
    minute = `0${minute}`;
}
return `${hour}:${minute}`;


}
function currentTemperature(response){
    let currentCity = document.querySelector(".current-city");
    let cityId = document.querySelector("#cityId");
    let currTemp = Math.round(response.data.main.temp);
    let currentTemperature = document.querySelector("#currentTemperature")

celsiusTemp = Math.round(response.data.main.temp);

    let humiditynow = document.querySelector("#currentHum");
    let currentHum = response.data.main.humidity;
    let currentWind = Math.round(response.data.wind.speed);
    let currentDay = document.querySelector("#currentDay");
    let currIcon = document.querySelector("#currIcon");

currentDay.innerHTML = formatDate(response.data.dt*1000);
humiditynow.innerHTML = `Humidity ${currentHum}% Wind: ${currentWind}km/h`;
currentCity.innerHTML = `${cityId.value}`;
currentTemperature.innerHTML = `${currTemp}°C`;
currIcon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}


function currentForecast(response){
let currentForecast = document.querySelector("#forecast");
currentForecast.innerHTML = null;
let forecast=null;


for (let index=0; index < 5; index++){

forecast = response.data.list[index]
currentForecast.innerHTML += `
        <div class="timeOne col-6">
        <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="" id="first" class="forecastIcon" width="50" >
     
        ${FormatHour(forecast.dt*1000)} </div>
        <i class="fas fa-tint col-1"></i>
        <div class="humidities col-4">Humidity</div>
        <div class="temp-Mon col-5 ml-auto">
        ${Math.round(forecast.main.temp_min)}° - ${Math.round(forecast.main.temp_max)}°</div>
        <div class="HumOne col-5 mr-auto">${forecast.main.humidity}%</div>`;
console.log(response.data);
}}
function findButton(){
    let apiKey = "1e7ad6ff012b71c9934450ff735183f3";
    let cityId = document.querySelector("#cityId");
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityId.value}&appid=${apiKey}&&units=metric`;
   
    axios.get(apiUrl).then(currentTemperature);

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${cityId.value}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(currentForecast);
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

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(currentForecast);
        }
function currTemperature(response){
            let currentCity = document.querySelector(".current-city");
            let currTemp = Math.round(response.data.main.temp);
             let cityId = response.data.name;
           currentCity.innerHTML = `${cityId}`;
           let humiditynow = document.querySelector("#currentHum");
            let currentHum = response.data.main.humidity;
            humiditynow.innerHTML = `Humidity ${currentHum}%`;
            let currentTemperature = document.querySelector("#currentTemperature")
            let currentWind = Math.round(response.data.wind.speed);
                let currentDay = document.querySelector("#currentDay");
                 let currIcon = document.querySelector("#currIcon");
        currentDay.innerHTML = formatDate(response.data.dt*1000);   
        currentTemperature.innerHTML = `${currTemp}°C`;
        humiditynow.innerHTML = `Humidity ${currentHum}% <div> Wind: ${currentWind}km/h<div>`;
    
currIcon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);  
    }
function cityNow(){
    navigator.geolocation.getCurrentPosition(currPosition)
}

let cityLink = document.querySelector("#currCityLink");
//cityNow();
cityLink.addEventListener("click", cityNow);

function TFahrenheit(event){
    event.preventDefault();
    let currentTemperature = document.querySelector("#currentTemperature")
    let TempFahrenheit = Math.round(celsiusTemp*(9/5)+32)
    currentTemperature.innerHTML = `${TempFahrenheit}°F`;
    };

let celsiusTemp = null;

let tempFahrenheit = document.querySelector("#tempFahrenheit");
tempFahrenheit.addEventListener("click", TFahrenheit);

function TCelsius(){
    let currentTemperature = document.querySelector("#currentTemperature")
    currentTemperature.innerHTML = celsiusTemp+"°C";
}

let tempCelsius = document.querySelector("#tempCelsius");
tempCelsius.addEventListener("click", TCelsius);
