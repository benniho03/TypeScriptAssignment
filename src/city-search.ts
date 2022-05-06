import { apiKey, cityInput } from "./dom-utils";
import { hideErrorMessage, showErrorMessage, updateUI } from "./ui-actions";

export let cityName: string = "Berlin";

const fetchURLCity = (() => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

export function getWeatherByCity() {
  hideErrorMessage();
  loadWeather()
    .then((data) => updateUI(data))
    .catch(() => showErrorMessage());
}

export function loadWeather() {
  setDefaultCity();
  return fetch(fetchURLCity())
    .then((response) => response.json())
    .then((data) => data);
}

function setDefaultCity() {
  cityInput.value ? cityName = cityInput.value : "Berlin";
}