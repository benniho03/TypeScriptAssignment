import { getWeatherByCity } from "./city-search";
import { btnSearchCity, btnSearchLocation } from "./dom-utils";
import { getWeatherByPosition } from "./user-position";

btnSearchCity.addEventListener("click", getWeatherByCity);
btnSearchLocation.addEventListener("click", getWeatherByPosition);

//Abfrage mit Wert Berlin
getWeatherByCity();