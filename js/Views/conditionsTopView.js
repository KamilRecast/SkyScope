import Weather from "./weather.js";
import * as model from "../model.js";

class ConditionsTopView extends Weather {
  _parentElement = document.getElementById("conditions-top");

  // Returning HTML code of weather conditions on the top half of the screen
  _generateMarkup() {
    return ` <div class="half-container single"><h3 id="sunrise">Sunrise:</h3><h1>${model.weather.sunrise}</h1></div>
    <div class="half-container single"><h3 id="sunset">Sunset:</h3><h1>${model.weather.sunset}</h1></div>
    <div class="half-container single">
      <h3 id="moonrise">Moonrise:</h3><h1>${model.weather.moonrise}</h1>
    </div>
    <div class="half-container single"><h3 id="moonset">Moonset:</h3><h1>${model.weather.moonset}</h1></div>
    <div class="half-container single"><h3 id="minTemp">Min Temp:</h3><h1>${model.weather.mintemp}</h1></div>
    <div class="half-container single"><h3 id="maxTemp">Max Temp:</h3><h1>${model.weather.maxtemp}</h1></div>`;
  }
}

export default new ConditionsTopView();
