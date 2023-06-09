import Weather from "./weather.js";
import * as model from "../model.js";

class ImageConditionView extends Weather {
  _parentElement = document.getElementById("location-image");

  // Returning HTML code of current lcoation condition
  _generateMarkup() {
    return `<img src="${model.weather.currentImage}"/>`;
  }
}

export default new ImageConditionView();
