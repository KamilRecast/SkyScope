import Weather from "./weather.js";
import * as model from "../model.js";

class BookmarksView extends Weather {
  _parentElement = document.querySelector(".bookmark-modal");
  _bookmarkButton = document.querySelector(".bookmark");

  // Handler - openning bookmarks modal and controlling rendered bookmarks
  addHandlerBookmarks = async (handler, weather) => {
    this._bookmarkButton.addEventListener("click", async () => {
      handler();
      this._parentElement.addEventListener("click", (event) => {
        model.handleClick(event, weather);
      });
    });
  };

  // Returning HTML code for bookmarks
  _generateMarkup = () => {
    if (model.bookmarks.length === 0) {
      return `
      <div class="bookmark-container">
    <div class="bookmark-result">
      <h1>No Bookmarks yet</h1>
      <h2>Search for places and add them to bookmarks</h2>
    </div>
    
    </div>`;
    } else {
      return model.bookmarks
        .map((value) => {
          return `<div class="bookmark-container">
<div class="bookmark-result">
    <h1>${value.name}</h1>
    <h2>${value.region}${value.region ? "," : ""} ${value.country}</h2>
  </div>
  <div class="result-bookmark"><button class="contol-bookmark remove-bookmark" data-lat="${
    value.lat
  }" data-lon ="${value.lon}" id="${
            value.lat + value.lon
          }">REMOVE</button></div>
  
  </div>`;
        })
        .join("");
    }
  };
}
export default new BookmarksView();
