const apiKey = "1a4f82d943f93178acc0f7676af43556"
const cityName :string = "Michelfeld";

const btn = document.getElementById("EnterCity") as HTMLButtonElement;
const city = document.querySelector("#location") as HTMLParagraphElement;
const deg = document.querySelector("#degrees") as HTMLParagraphElement

const fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
const kelvinCalc :number= -273

function loadWeather(){
  return fetch(fetchURL)
  .then(response => response.json())
  .then(data => data)
}

function displayWeather () {
  loadWeather()
    .then(data => {
      deg.textContent = (Math.floor(kelvinCalc + data.main.temp)).toString()
      city.textContent = (data.name)
    })
    .catch(err => err)
}

btn.addEventListener('click', displayWeather)