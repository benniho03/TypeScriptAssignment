export const btnSearchCity = document.querySelector("#EnterCity") as HTMLButtonElement;
export const btnSearchLocation = document.querySelector("#useLocation") as HTMLButtonElement;
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

export interface weather {
    coord: {
        lon: number;
        lat: string;
    };
    main: {
        temp: number
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
    }
    timezone: number;
    visibility: number;
    weather: [{
        icon: string;
    }];
}