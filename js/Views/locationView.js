import Weather from "./weather.js";
import * as model from "../model.js";

class LocationView extends Weather {
  _parentElement = document.getElementById("location-name");

  // Returning HTML code of location name and current temperature
  _generateMarkup() {
    return `<div><h1>${model.weather.name}</h1></div>
    <div><h1>${model.weather.temp}</h1></div>`;
  }
}

export default new LocationView();
