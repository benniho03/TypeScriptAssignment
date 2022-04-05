const btn = document.getElementById("EnterCity") as HTMLButtonElement;
const city = document.querySelector("#location") as HTMLParagraphElement;
const deg = document.querySelector("#degrees") as HTMLParagraphElement;
const cond = document.querySelector("#weatherCondition") as HTMLParagraphElement;
const weatherIcon = document.querySelector("#icon") as HTMLParagraphElement;
const cityInput = document.querySelector("#cityInput") as HTMLInputElement;
const flag = document.querySelector("img") as HTMLImageElement;

const apiKey :string = "1a4f82d943f93178acc0f7676af43556"
let cityName :string = "Michelfeld";
let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

btn.addEventListener('click', displayWeather)

const kelvinCalc :number= -273;

//Abfrage mit Wert New York
displayWeather();

function displayWeather () {
  loadWeather()
    .then(data => {
      deg.textContent = (Math.floor(kelvinCalc + data.main.temp)).toString() +"°C"
      city.textContent = `${data.name}`
      cond.textContent = data.weather[0].main
      flag.src = `https://flagcdn.com/120x90/${(data.sys.country).toLowerCase()}.png`
      flag.srcset = `https://flagcdn.com/240x180/${(data.sys.country.toLowerCase())}.png 2x`
      console.log(data)
      console.log(data.sys.country)
    })
    .catch(err => console.log(err))
}


function loadWeather(){
  if(!cityInput.value){
    cityName = "Michelfeld"
  } else {
    cityName = cityInput.value;
  }

  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => data)
}