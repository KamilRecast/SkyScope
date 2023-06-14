import Weather from "./weather.js";
import * as model from "../model.js";

class AlertView extends Weather {
  _parentElement = document.querySelector(".container-alert-modals");
  _alertModal = document.querySelector(".container-alert-modals");

  alert = () => {
    if (model.weather.alerts.length > 0) {
      const alertButton = document.getElementById("alert-to-open");

      this._openAlert();
      // Dodanie nowego nasłuchiwania
      this._alertModal.addEventListener("click", this._handleAlertClick);
      alertButton.addEventListener("click", () => {
        this._openAlert();
      });
    }
  };

  _openAlert = () => {
    if (!this._alertModal) return;

    this._alertModal.classList.remove("hidden");
    this._alertModal.innerHTML = "";
    this._alertModal.insertAdjacentHTML(
      "beforeend",
      this._generateMarkup(model.weather.alertIndex)
    );
  };
  _handleAlertClick = (event) => {
    console.log(event.target);

    if (event.target.classList.contains("next")) {
      console.log("next");
      ++model.weather.alertIndex;
      this._updateAlertModal();
      console.log(model.weather.alertIndex);
    } else if (event.target.classList.contains("prev")) {
      console.log("prev");
      --model.weather.alertIndex;
      this._updateAlertModal();
      console.log(model.weather.alertIndex);
    } else if (event.target.classList.contains("alert-close")) {
      console.log(model.weather.alertIndex);
      model.weather.alertIndex = 0;
      this._closeAlertModal();
    }
  };

  _updateAlertModal() {
    const alertModal = document.querySelector(".container-alert-modals");
    alertModal.innerHTML = this._generateMarkup();
  }

  _closeAlertModal() {
    const alertModal = document.querySelector(".container-alert-modals");
    alertModal.classList.add("hidden");
  }

  _generateMarkup() {
    console.log("GENERATING MARKUP");
    console.log(model.weather.alerts);
    const alert = model.weather.alerts[model.weather.alertIndex];
    console.log(alert);
    console.log("break");
    console.log(model.weather.alertIndex);
    return `
      <div class="alert-modal" id="alert-modal">
        <button class="alert-close">X</button>
        <div class="alert-content">
          <i class="fa-solid fa-triangle-exclamation fa-2xl" style="color: #ffffff"></i>
        </div>
        <div class="alert-content">
          <h1>${alert.event}</h1>
        </div>
        <div class="alert-content alert-short">
          <h1>Severity: ${alert.severity}</h1>
        </div>
        <div class="alert-content alert-short">
          <h1>Urgency: ${alert.urgency}</h1>
        </div>
        <div class="alert-agency">
          <h1>${alert.note}</h1>
        </div>
        <div class="alert-description">
          <h1>${alert.headline}</h1>
        </div>
        <div class="alert-description">
          <h1>${alert.areas}</h1>
        </div>
        ${
          model.weather.alertIndex === 0
            ? `<a class="next">&#10095;</a>`
            : `<a class="prev">&#10094;</a>`
        }
      </div>
    `;
  }
}

export default new AlertView();
