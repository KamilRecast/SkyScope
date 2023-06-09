import Weather from "./weather.js";
import * as model from "../model.js";

class ConditionsBottomView extends Weather {
  _parentElement = document.getElementById("conditions-bottom");

  // Returning HTML code of weather conditions on the bottom half of the screen
  _generateMarkup() {
    return ` <div class="half-container single">
    <h3 id="feelsLike">Feels like:</h3><h1>${model.weather.feelslike}</h1>
  </div>
  <div class="half-container single">
    <h3 id="condition">Condition:</h3><h1>${model.weather.currentCondition}</h1>
  </div>
  <div class="half-container single"><h3 id="wind">Wind:</h3><h1>${model.weather.wind}</h1></div>
  <div class="half-container single">
    <h3 id="pressure">Pressure:</h3><h1>${model.weather.pressure}</h1>
  </div>
  <div class="half-container single">
    <h3 id="humidity">Humidity:</h3><h1>${model.weather.humidity}</h1>
  </div>
  <div class="half-container single">
    <h3 id="visibility">Visibility:</h3><h1>${model.weather.visibility}</h1>
  </div>`;
  }
}

export default new ConditionsBottomView();
