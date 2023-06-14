import Weather from "./weather.js";
import * as model from "../model.js";

class LocationView extends Weather {
  _parentElement = document.getElementById("location-name");

  // Returning HTML code of location name and current temperature
  _generateMarkup() {
    return `<div><h1>${model.weather.name}</h1></div>
    <div><h1>${model.weather.temp}    ${
      model.weather.alerts.length > 0
        ? `<i class="fa-solid fa-triangle-exclamation alert" id="alert-to-open" style="color: #fa0000;"></i></i>`
        : ""
    }</h1></div>`;
  }
}

export default new LocationView();
