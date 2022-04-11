import { apiKey } from "./dom-utils";
import { updateUI } from "./ui-actions";

export function loadWeatherCoords(lat :number, lon :number) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => updateUI(data));
}

export function getWeatherByPosition() {
  navigator.geolocation.getCurrentPosition(successCallback);

  function successCallback(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    loadWeatherCoords(lat, lon)
  }

  
}
