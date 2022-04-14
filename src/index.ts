import { btnSearch, cityInput, apiKey, btnLocation } from "./dom-utils";
import { hideErrorMessage, updateUI } from "./ui-actions";
import { getWeatherByPosition } from "./user-position";

let cityName :string = "Berlin";
let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

btnSearch.addEventListener('click', displayWeather)
btnLocation.addEventListener('click', getWeatherByPosition)

function displayWeather () {
  hideErrorMessage()
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

function setDefaultCity(){
  if(!cityInput.value){
    cityName = "Berlin"
  } else {
    cityName = cityInput.value;
  }
}

//Abfrage mit Wert Berlin
displayWeather();