import { cityName, getWeatherByCity } from "./city-search";
import { btnSearchCity, cityInput, apiKey, btnSearchLocation } from "./dom-utils";
import { getWeatherByPosition } from "./user-position";

let fetchURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

btnSearchCity.addEventListener("click", getWeatherByCity);
btnSearchLocation.addEventListener("click", getWeatherByPosition);

//Abfrage mit Wert Berlin
getWeatherByCity();