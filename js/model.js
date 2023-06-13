import { API_CALL } from "./config.js";
import { DEFAULT_COORDS } from "./config.js";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export let weather = {};
export let search = [];
export let bookmarks = [];

// Creating Hourly Forecast Object Function
const createHourlyForecastObject = function (weather, currentHour) {
  // Setting up empty array
  const hourlyArray = [];
  // ForecastIndex - 0 or 1 depends of the time, 0 - current day, 1- next day
  let forecastIndex = 0;
  // Today - false, Tomorrow - true
  let tomorrowFlag = false;

  // Looping through the today and tomorrow hourly forecast array to create a 24hours forecast array
  for (let hourCount = 0; hourlyArray.length < 24; hourCount++) {
    // Getting data from today hourly forecast array or tomorrow - depends of the forecastIndex
    const forecastday = weather.forecast.forecastday[forecastIndex];
    // Setting up the current forecast hour
    const forecastHour = forecastday.hour[hourCount];

    // Getting current array hour
    const date = new Date(forecastHour.time);
    const arrayHour = date.getHours();

    // Creating new objects depends of the hour and day until hourlyArray will be full
    if (!tomorrowFlag) {
      if (+arrayHour === +currentHour) {
        hourlyArray.push({
          hourForecast: "NOW",
          iconHourForecast: forecastHour.condition.icon,
          hourTempForecast: forecastHour.temp_c,
          hourChanceOfRain: forecastHour.chance_of_rain,
        });
      }
      if (+arrayHour > +currentHour) {
        hourlyArray.push({
          hourForecast: arrayHour.toString().concat(":", "00"),
          iconHourForecast: forecastHour.condition.icon,
          hourTempForecast: forecastHour.temp_c,
          hourChanceOfRain: forecastHour.chance_of_rain,
        });
      }
    } else {
      if (+arrayHour < +currentHour) {
        hourlyArray.push({
          hourForecast: arrayHour.toString().concat(":", "00"),
          iconHourForecast: forecastHour.condition.icon,
          hourTempForecast: forecastHour.temp_c,
          hourChanceOfRain: forecastHour.chance_of_rain,
        });
      }
    }
    //Once looping is finished for today it's switching to the next day
    if (hourCount >= forecastday.hour.length - 1) {
      forecastIndex++;
      hourCount = -1;
      tomorrowFlag = true;
    }
    // Breaking the loop after it's finished lopping through 2 days
    if (forecastIndex >= weather.forecast.forecastday.length) {
      break;
    }
  }

  return hourlyArray;
};

// Creating Weather Object which is storing all needed data
const createWeatherObject = function (data) {
  // Setting up the weather const
  const weather = data;
  // Getting current hour
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // Creating hourlyForecast array by using createHourlyForecastObject function
  const hourlyForecast = createHourlyForecastObject(weather, currentHour);

  // Creating weeklyForecast array
  const weeklyForecast = weather.forecast.forecastday.map((day) => {
    const date = new Date(day.date);

    return {
      dayOfTheWeek: weekDays[date.getDay()],
      image: day.day.condition.icon,
      minTemp: day.day.mintemp_c,
      maxTemp: day.day.maxtemp_c,
      chanceOfRain: day.day.daily_chance_of_rain,
    };
  });

  // Setting up object values
  return {
    date: weather.forecast.forecastday[0].date,
    currentHour: currentHour,
    name: weather.location.name,
    region: weather.location.region,
    country: weather.location.country,
    lat: weather.location.lat,
    lon: weather.location.lon,
    coords: weather.location.lat
      .toString()
      .concat(",", weather.location.lon.toString()),
    localtime: weather.location.localtime,
    daysForecast: weather.forecast.forecastday,
    currentImage: weather.current.condition.icon,
    currentCondition: weather.current.condition.text,
    feelslike: weather.current.feelslike_c + "℃",
    humidity: weather.current.humidity + " %",
    temp: weather.current.temp_c + "℃",
    sunrise: weather.forecast.forecastday[0].astro.sunrise,
    sunset: weather.forecast.forecastday[0].astro.sunset,
    moonrise: weather.forecast.forecastday[0].astro.moonrise,
    moonset: weather.forecast.forecastday[0].astro.moonset,
    mintemp: weather.forecast.forecastday[0].day.mintemp_c + "℃",
    maxtemp: weather.forecast.forecastday[0].day.maxtemp_c + "℃",
    wind: weather.current.wind_kph + " km/h",
    pressure: weather.current.pressure_mb + " hPa",
    visibility: weather.current.vis_km + " km",
    weeklyForecast: weeklyForecast,
    hourlyForecast: hourlyForecast,
  };
};

// Creating new search array
const createSearchArray = function (data) {
  const search = data;
  return search.map((value) => {
    return {
      country: value.country,
      lat: value.lat,
      lon: value.lon,
      coords: value.lat.toString().concat(",", value.lon.toString()),
      name: value.name,
      region: value.region,
      bookmarked: isBookmark(value.lat, value.lon),
    };
  });
};

// Init - getting data from LocalStorage and updating current bookmarks with current data
const init = async () => {
  const data = await (JSON.parse(localStorage.getItem("Locations")) || []);
  localStorage.clear();
  data.forEach(async (bookmark) => {
    const updatedBookmark = await API_CALL(bookmark.coords, "forecast");
    addBookmark(createWeatherObject(updatedBookmark));
  });
};
// Updating current bookmarks in Local Storage
const updateBookmarks = () => {
  localStorage.setItem("Locations", JSON.stringify(bookmarks));
};
// Adding up a new bookmark
const addBookmark = (data) => {
  bookmarks.push(data);
  updateBookmarks();
};
// Removing a bookmark
const removeBookmark = (index) => {
  bookmarks.splice(index, 1);
  updateBookmarks();
};
// Checking if value is already bookmarked and returning the object
const isBookmark = (lat, lon) => {
  const index = bookmarks.findIndex(
    (city) => city.lat === lat && city.lon === lon
  );
  const coords = lat + lon;

  if (index !== -1) {
    return { found: true, index, id: coords };
  }

  return { found: false, index: -1, id: coords };
};

// Returning array index of clicked value
const resultsArray = async (target, array) => {
  const selectedResult = await array.find(
    (value) =>
      value.name === target.querySelector("h1").textContent.trim() &&
      target.querySelector("h2").textContent.trim().includes(value.country) &&
      target.querySelector("h2").textContent.trim().includes(value.country)
  );
  return selectedResult;
};

// Closing modals function - checking where user clicked
export const closeModals = () => {
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

// Rendering Leaflet Map
const renderMap = (lat, long) => {
  const mapContainer = document.getElementById("mapContainer");

  mapContainer.innerHTML = "";
  const mapDiv = document.createElement("div");
  mapDiv.id = "map";
  mapContainer.appendChild(mapDiv);
  mapDiv.style.height = "250px";
  const latitude = Number(lat);
  const longitude = Number(long);

  let map = L.map("map").setView([latitude, longitude], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);
  L.marker([latitude, longitude]).addTo(map);
};

// Updating Weather function for selected value
export const updateWeather = async function (coords, handler = undefined) {
  try {
    // Gettin data from API CALL
    const data = await API_CALL(coords, "forecast");
    // Creating new Weather Object from data
    weather = createWeatherObject(data);
    // Rendering Leaflet Map for current coords
    renderMap(weather.lat, weather.lon);
    // Rendering current weather
    if (handler) handler();
  } catch (err) {
    throw err;
  }
};

// Creating an array from searched value
export const loadSearchResults = async (searchInput) => {
  // Getting data from API CALL
  const data = await API_CALL(searchInput, "search");
  // Creating new Search Array and returning it
  search = createSearchArray(data);
  return data;
};

// Clicking handler function - managing clicks on results, bookmarks etc.
export const handleClick = async function (event, handler) {
  // Setting up the closest event target
  let target = event.target.closest(
    ".result, .add-bookmark, .remove-bookmark, .bookmark-result"
  );

  if (!target) return;
  // If user searched for something and clicked on one of the result - finding index and rendering current weather
  if (
    target.classList.contains("result") &&
    !target.classList.contains("no-results")
  ) {
    // Finding current target in search array and returning data with coords
    const data = await resultsArray(target, search);
    spinner();
    // Updating and rendering weather
    await updateWeather(data.coords, handler);
  }
  // If user clicked on bookmarks and clicked on one of the bookmark result after - finding index and rendering current weather
  if (
    target.classList.contains("bookmark-result") &&
    !target.classList.contains("no-results")
  ) {
    // Finding current target in search array and returning data with coords
    const data = await resultsArray(target, bookmarks);
    spinner();
    // Updating and rendering weather
    await updateWeather(data.coords, handler);
  }
  // If user clicked on add bookmark button
  if (target.classList.contains("add-bookmark")) {
    // Checking that this location is not in bookmarks already
    if (!isBookmark(target.dataset.lat, target.dataset.lon).found) {
      const coords = target.dataset.lat
        .toString()
        .concat(",", target.dataset.lon.toString());
      // Getting current data from clicked bookmark
      const data = await API_CALL(coords, "forecast");
      // Adding up new bookmark to Local Storage
      addBookmark(createWeatherObject(data));
      spinner();
      // Updating and rendering weather
      await updateWeather(coords, handler);
    }
  }
  // If user clicked on Remove bookmark button
  if (target.classList.contains("remove-bookmark")) {
    // Finding the index in current bookmarks array
    let index = bookmarks.findIndex((el) => {
      return target.dataset.coords === el.coords;
    });
    // Removing from bookmarks
    removeBookmark(index);
  }
};
// What should happen when user approve location sharing
const userLocation = async (position) => {
  // Getting current location coords
  const coords = position.coords.latitude
    .toString()
    .concat(",", position.coords.longitude.toString());
  // Updating and rendering current weather for location
  await updateWeather(coords);
};

// What should happen when user block location sharing
const blockedLocation = async () => {
  // Updating and rendering weather for default coords (London)
  await updateWeather(DEFAULT_COORDS);
};

// Getting user current location
export const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation(position).then(resolve).catch(reject);
      },
      () => {
        blockedLocation().then(resolve).catch(reject);
      }
    );
  });
};
// Loading spinner - it's active before rendering current weather
export const spinner = () => {
  const spinner = document.querySelector(".spinner");

  spinner.classList.toggle("spinner-hidden");
};

init();
