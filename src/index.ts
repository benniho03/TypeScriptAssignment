let apiKey :string = "1a4f82d943f93178acc0f7676af43556"
let cityName :string = "";
const fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

const btn = document.getElementById("EnterCity") as HTMLButtonElement;
const city = document.querySelector("#location") as HTMLParagraphElement;
const deg = document.querySelector("#degrees") as HTMLParagraphElement;
const cond = document.querySelector("#weatherCondition") as HTMLParagraphElement;
const weatherIcon = document.querySelector("#icon") as HTMLParagraphElement;
const cityInput = document.querySelector("#cityInput") as HTMLInputElement;

btn.addEventListener('click', displayWeather)

const kelvinCalc :number= -273;

function loadWeather(){
  cityName = cityInput.value;
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => data)
}

function displayWeather () {
  loadWeather()
    .then(data => {
      deg.textContent = (Math.floor(kelvinCalc + data.main.temp)).toString() +"°"
      city.textContent = data.name
      cond.textContent = data.weather[0].main
      weatherIcon.textContent = data.weather[0].icon
    })
    .catch(err => console.log(err))
}
