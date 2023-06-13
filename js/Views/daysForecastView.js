import Weather from "./weather.js";
import * as model from "../model.js";

class DaysForecastView extends Weather {
  _parentElement = document.getElementById("forecast-days");

  // Returning HTML code of weather forecast for 3 following days
  _generateMarkup() {
    return model.weather.weeklyForecast
      .map((day) => {
        return `
    <div class="forecast-day">
    <img src="${day.image}"/> 
    <div class="forecast-day-container">
    
    <div><p>${
      day.dayOfTheWeek
    }</p></div><div class="forecast-day-temperature"><p>${
          day.minTemp
        }℃</p> <div class="temperature-bar"></div><p>${day.maxTemp}℃</p>
    </div><p>${
      day.chanceOfRain > 0
        ? `<i class="fa-solid fa-droplet fa-2xs"></i> ${day.chanceOfRain} % </p>`
        : ""
    }</div></div>
  `;
      })
      .join("");
  }
}

export default new DaysForecastView();
