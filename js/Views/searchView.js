import Weather from "./weather.js";
import * as model from "../model.js";
class SearchView extends Weather {
  _parentElement = document.getElementById("search-results");
  _searchForm = document.getElementById("search-form");
  _searchInput = document.querySelector(".search-input");

  // Handler - handling search input
  addHandlerSearch(handler) {
    this._searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  // Returning searching value from the form
  getSearchValue = async () => {
    const searchValue = this._searchInput.value;
    this._clearInput();
    return searchValue;
  };

  // Clearing search input
  _clearInput = () => {
    this._searchInput.value = "";
    this._searchInput.blur();
  };

  // Generating HTML code of search results
  _generateMarkup = () => {
    if (model.search.length === 0) {
      return `
      <div class="result-container">
        <div class="result no-results">
          <h1>No results found</h1>
          <h2>Please try again</h2>
        </div>
      </div>`;
    } else {
      return model.search
        .map((value) => {
          return `
        <div class="result-container">
          <div class="result">
            <h1>${value.name}</h1>
            <h2>${value.region}${value.region ? "," : ""} ${value.country}</h2>
          </div>
          <div class="result-bookmark">
            <button class="${
              value.bookmarked.found ? "remove" : "add"
            }-bookmark" data-lat="${value.lat}" data-lon="${value.lon}" id="${
            value.bookmarked.id
          }">
              ${value.bookmarked.found ? "REMOVE" : "ADD"}
            </button>
          </div>
        </div>`;
        })
        .join("");
    }
  };
}

export default new SearchView();
