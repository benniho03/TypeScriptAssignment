import { apiKey } from "./dom-utils";
import { hideErrorMessage, showErrorMessage, updateUI } from "./ui-actions";

const fetchURLCoords = ((lat :number, lon :number) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);

export function loadWeatherCoords(lat: number, lon: number) {
  return fetch(fetchURLCoords(lat, lon))
    .then((res) => res.json())
    .then((data) => data);
  }

export function getWeatherByPosition() {
  
  function successCallback(position: GeolocationPosition) {
    hideErrorMessage();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    loadWeatherCoords(lat, lon)
      .then(data => updateUI(data))
      .catch(() => showErrorMessage());
  }

  function errorCallback() {
    showErrorMessage();
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}