import { apiKey, cityInput } from "./dom-utils";
import { hideErrorMessage, updateUI } from "./ui-actions";

export let cityName: string = "Berlin";

export function getWeatherByCity() {
  hideErrorMessage();
  loadWeather()
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}

export function loadWeather() {
  setDefaultCity();
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => data);
}

function setDefaultCity() {
  if (!cityInput.value) {
    cityName = "Berlin";
  } else {
    cityName = cityInput.value;
  }
}
