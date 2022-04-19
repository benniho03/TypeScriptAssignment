export const btnSearchCity = document.getElementById("EnterCity") as HTMLButtonElement;
export const btnSearchLocation = document.getElementById("useLocation") as HTMLButtonElement;
export const cityDisplay = document.querySelector("#location") as HTMLParagraphElement;
export const degDisplay = document.querySelector("#degrees") as HTMLParagraphElement;
export const cityInput = document.querySelector("#cityInput") as HTMLInputElement;
export const flag = document.querySelector("#flag") as HTMLImageElement;
export const weatherIcon = document.querySelector("#weatherIcon") as HTMLImageElement;
export const minDeg = document.querySelector("#minDeg") as HTMLParagraphElement;
export const maxDeg = document.querySelector("#maxDeg") as HTMLParagraphElement;
export const errorMessage = document.querySelector(".errorMessageContainer") as HTMLDivElement;

export const kelvinCalc :number= -273;
export const apiKey :string = "1a4f82d943f93178acc0f7676af43556";