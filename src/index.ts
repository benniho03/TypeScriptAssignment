import { isConstructorDeclaration } from "../node_modules/typescript/lib/typescript";
import { btnSearch, deg, city, flag, icon, cityInput, minDeg, maxDeg, kelvinCalc, apiKey, btnLocation } from "./dom-utils";
import { updateUI } from "./ui-actions";

let cityName :string = "Berlin";
let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

btnSearch.addEventListener('click', displayWeather)
btnLocation.addEventListener('click', getLocation)

function getLocation() :number[]{
  let coords :number [] = []
  navigator.geolocation.getCurrentPosition((position) => {
    coords = [position.coords.latitude, position.coords.longitude]
    return coords
  })
  return coords
}

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

function loadWeatherCoords(getLocation :number []){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getLocation[0]}&lon=${getLocation[1]}&appid=${apiKey}`)
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

console.log(getLocation())