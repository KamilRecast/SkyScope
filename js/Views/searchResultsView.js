import Weather from "./weather.js";
import * as model from "../model.js";
class SearchResultsView extends Weather {
  _parentElement = document.getElementById("search-results");

  // Handler - controlling clicks on the search results
  addHandlerSearchResult = (handler) => {
    this._parentElement.addEventListener("click", (event) => {
      model.handleClick(event, handler);
    });
  };
}

export default new SearchResultsView();
