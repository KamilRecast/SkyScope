import Weather from "./weather.js";
import * as model from "../model.js";

class HourlyForecastView extends Weather {
  _parentElement = document.getElementById("hourly-forecast");

  // Returning HTML code of weather hourly conditions for the current day
  _generateMarkup() {
    return model.weather.daysForecast[0].hour
      .map((hour) => {
        const date = new Date(hour.time);
        const hourDate = date.getHours();
        return `<div class="weather-data">
        <p>${hourDate}:00</p>
        <p><img src="${hour.condition.icon}"/></p>
        <p>${hour.temp_c}℃</p>
      </div>`;
      })
      .join("");
  }
}

export default new HourlyForecastView();
