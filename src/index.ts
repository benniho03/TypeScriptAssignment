const APIkey :string = "1a4f82d943f93178acc0f7676af43556"
let cityName :string = "Stuttgart";

const fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

fetch(fetchURL)
  .then(res => res.json)
  .catch(err => console.log(err))