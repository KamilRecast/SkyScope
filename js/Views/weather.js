export default class Weather {
  _appContainer = document.querySelector(".app");

  // Rendering App content for each container
  render = () => {
    this._clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  };

  // Clearing containers content
  _clear = () => {
    this._parentElement.innerHTML = "";
  };

  // Closing modals
  closeModals = () => {
    document.addEventListener("click", (event) => {
      if (
        !event.target.classList.contains("result") &&
        !event.target.classList.contains("bookmark-result") &&
        !event.target.classList.contains("bookmark") &&
        event.target !== this._parentElement
      ) {
        this._appContainer.style.opacity = 1;
        this._parentElement.innerHTML = "";
      }
    });
  };
}
