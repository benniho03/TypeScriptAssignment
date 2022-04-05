export const btn = document.getElementById("EnterCity") as HTMLButtonElement;
export const city = document.querySelector("#location") as HTMLParagraphElement;
export const deg = document.querySelector("#degrees") as HTMLParagraphElement;
export const cond = document.querySelector("#weatherCondition") as HTMLParagraphElement;
export const weatherIcon = document.querySelector("#icon") as HTMLParagraphElement;
export const cityInput = document.querySelector("#cityInput") as HTMLInputElement;
export const flag = document.querySelector("#flag") as HTMLImageElement;
export const icon = document.querySelector("#weatherIcon") as HTMLImageElement;

export const apiKey :string = "1a4f82d943f93178acc0f7676af43556"
export let cityName :string = "Michelfeld";
export let fetchURL :string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`