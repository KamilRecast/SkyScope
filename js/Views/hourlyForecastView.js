import Weather from "./weather.js";
import * as model from "../model.js";

class HourlyForecastView extends Weather {
  _parentElement = document.getElementById("hourly-forecast");

  // Returning HTML code of weather hourly conditions for the current day
  _generateMarkup() {
    console.log(model.weather);
    return model.weather.hourlyForecast
      .map((hour) => {
        return `<div class="weather-data">
        <p>${hour.hourForecast}</p>
        <p><img src="${hour.iconHourForecast}"/></p>
        <p>${hour.hourTempForecast}℃</p>
      </div>`;
      })
      .join("");
  }
}

export default new HourlyForecastView();
