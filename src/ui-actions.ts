import { deg, kelvinCalc, city, minDeg, maxDeg, flag, icon } from "./dom-utils"

export function updateUI(data :any) {
    deg.textContent = (Math.floor(kelvinCalc + data.main.temp)).toString() +"°C"
    city.textContent = data.name
    minDeg.textContent = (Math.floor(kelvinCalc + data.main.temp_min)).toString() +"°C"
    maxDeg.textContent = (Math.floor(kelvinCalc + data.main.temp_max)).toString() +"°C"
  
    flag.src = `https://flagcdn.com/80x60/${(data.sys.country).toLowerCase()}.png`
    flag.srcset = `https://flagcdn.com/160x120/${(data.sys.country.toLowerCase())}.png 2x`

    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  } 