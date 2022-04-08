import { btn, deg, city, flag, icon, cityInput, minDeg, maxDeg, kelvinCalc } from "./dom-utils";
import { updateUI } from "./ui-actions";


const apiKey :string = "1a4f82d943f93178acc0f7676af43556"
let cityName :string = "Berlin";
let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

btn.addEventListener('click', displayWeather)

navigator.geolocation.getCurrentPosition((position) => {
  const lat :number= position.coords.latitude
  const lon :number= position.coords.longitude

  loadWeatherCoords(lat, lon)
})

function displayWeather () {
  loadWeather()
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}



function loadWeather() {
  setDefaultCity()
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => data)
}

function loadWeatherCoords(lat :number, lon :number){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

function setDefaultCity(){
  if(!cityInput.value){
    cityName = "Berlin"
  } else {
    cityName = cityInput.value;
  }
}

//Abfrage mit Wert Berlin
displayWeather();