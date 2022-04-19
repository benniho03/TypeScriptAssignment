import { apiKey, cityInput } from "./dom-utils";
import { hideErrorMessage, updateUI } from "./ui-actions";

export let cityName: string = "Berlin";

// let fetchURLCity: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

const fetchURLCity = (() => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

export function getWeatherByCity() {
  hideErrorMessage();
  loadWeather()
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}

export function loadWeather() {
  setDefaultCity();
  return fetch(fetchURLCity())
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
