import Weather from "./weather.js";
import * as model from "../model.js";

class DateView extends Weather {
  _parentElement = document.getElementById("location-date");

  // Returning HTML code of the location date
  _generateMarkup() {
    return `<h1>${model.weather.date}</h1>`;
  }
}

export default new DateView();
