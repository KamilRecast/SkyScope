import searchView from "./Views/searchView.js";
import bookmarksView from "./Views/bookmarksView.js";
import hourlyForecastView from "./Views/hourlyForecastView.js";
import imageConditionView from "./Views/imageCondition.js";
import daysForecastView from "./Views/daysForecastView.js";
import searchResultsView from "./Views/searchResultsView.js";
import locationView from "./Views/locationView.js";
import dateView from "./Views/dateView.js";
import conditionsTopView from "./Views/conditionsTopView.js";
import conditionsBottomView from "./Views/conditionsBottomView.js";
import * as model from "./model.js";

const controlWeather = async () => {
  try {
    // Rendering current location condition
    imageConditionView.render();

    // Rendering current location city name and temperature
    locationView.render();

    // Rendering current date
    dateView.render();

    // Rendering curent location conditions
    conditionsTopView.render();

    // Rendering hourly forecast
    hourlyForecastView.render();

    // Rendering current location conditions
    conditionsBottomView.render();

    // Rendering weather forecast for 3 following days
    daysForecastView.render();

    model.spinner();
  } catch (err) {
    console.error(err);
  }
};

const controlSearch = async () => {
  try {
    // Getting search value
    const searchInput = await searchView.getSearchValue();

    // API search request and creating search Array from the search value
    await model.loadSearchResults(searchInput);

    // Rendering search values
    searchView.render();

    // Activating closing modal function
    searchView.closeModals();
  } catch (err) {
    console.error(err);
  }
};

const controlBookmark = () => {
  // Rendering bookmarks
  bookmarksView.render();

  // Activating closing modal function
  bookmarksView.closeModals();
};
const init = async function () {
  await model.getPosition();
  console.log("START");

  // Render current weather for current location
  console.log("CONTROL WEATHER");
  await controlWeather();

  console.log("BOOKMARKS");
  bookmarksView.addHandlerBookmarks(controlBookmark, controlWeather);
  console.log(`BOOKMARKS OBJECTS ${model.bookmarks}`);
  console.log(model.bookmarks);

  console.log("SEARCH VIEW");
  searchView.addHandlerSearch(controlSearch);

  console.log("SEARCH RESULTS");
  searchResultsView.addHandlerSearchResult(controlWeather);
};

init();
