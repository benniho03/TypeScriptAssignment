import { apiKey } from "./dom-utils";

export function getLocation() {
  return navigator.geolocation.getCurrentPosition(successCallback);
}

const successCallback = (position :GeolocationPosition) => {
    return new Array(position.coords.latitude, position.coords.longitude)
}

export function loadWeatherCoords(getLocation: number[]) {
    
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation[0]}&lon=${getLocation[1]}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
}
console.log(getLocation())
getLocation()