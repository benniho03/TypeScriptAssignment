import { createConditional } from "../node_modules/typescript/lib/typescript";

const btn = document.getElementById("EnterCity") as HTMLButtonElement;
const city = document.querySelector("#location") as HTMLParagraphElement;
const deg = document.querySelector("#degrees") as HTMLParagraphElement;
const cond = document.querySelector("#weatherCondition") as HTMLParagraphElement;
const weatherIcon = document.querySelector("#icon") as HTMLParagraphElement;
const cityInput = document.querySelector("#cityInput") as HTMLInputElement;

const apiKey :string = "1a4f82d943f93178acc0f7676af43556"
let cityName :string = "";
let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

btn.addEventListener('click', displayWeather)

const kelvinCalc :number= -273;

function displayWeather () {
  loadWeather()
    .then(data => {
      deg.textContent = (Math.floor(kelvinCalc + data.main.temp)).toString() +"°"
      city.textContent = `${data.name}, ${data.sys.country}`
      cond.textContent = data.weather[0].main
      console.log(data)
    })
    .catch(err => console.log(err))
}

function loadWeather(){
  cityName = cityInput.value;
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => data)
}
