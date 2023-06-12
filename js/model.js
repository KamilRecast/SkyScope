import { API_CALL } from "./config.js";
const defaultCoords = "51.509865, -0.118092";
export const weekDays = [
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

const createWeatherObject = function (data) {
  const weather = data;

  const weeklyForecast = weather.forecast.forecastday.map((day) => {
    const date = new Date(day.date);
    const currentDate = new Date();
    console.log(currentDate);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    console.log(hour);
    console.log(minute);

    return {
      dayOfTheWeek: weekDays[date.getDay()],
      image: day.day.condition.icon,
      minTemp: day.day.mintemp_c,
      maxTemp: day.day.maxtemp_c,
    };
  });

  return {
    date: weather.forecast.forecastday[0].date,
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
  };
};

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

const init = async () => {
  const data = await (JSON.parse(localStorage.getItem("Locations")) || []);
  localStorage.clear();
  data.forEach(async (bookmark) => {
    const updatedBookmark = await API_CALL(bookmark.coords, "forecast");
    addBookmark(createWeatherObject(updatedBookmark));
  });
};

const updateBookmarks = () => {
  localStorage.setItem("Locations", JSON.stringify(bookmarks));
};
const addBookmark = (data) => {
  bookmarks.push(data);
  updateBookmarks();
};
const removeBookmark = (index) => {
  bookmarks.splice(index, 1);
  updateBookmarks();
};
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

const resultsArray = async (target, array) => {
  const selectedResult = await array.find(
    (value) =>
      value.name === target.querySelector("h1").textContent.trim() &&
      target.querySelector("h2").textContent.trim().includes(value.country) &&
      target.querySelector("h2").textContent.trim().includes(value.country)
  );
  return selectedResult;
};

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

export const updateWeather = async function (coords, handler = undefined) {
  try {
    const data = await API_CALL(coords, "forecast");
    console.log(data);
    weather = createWeatherObject(data);
    renderMap(weather.lat, weather.lon);
    if (handler) handler();
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async (searchInput) => {
  const data = await API_CALL(searchInput, "search");
  search = createSearchArray(data);
  return data;
};

export const handleClick = async function (event, handler) {
  let target = event.target.closest(
    ".result, .add-bookmark, .remove-bookmark, .bookmark-result"
  );

  if (!target) return;
  if (
    target.classList.contains("result") &&
    !target.classList.contains("no-results")
  ) {
    const data = await resultsArray(target, search);
    spinner();
    await updateWeather(data.coords, handler);
  }
  if (
    target.classList.contains("bookmark-result") &&
    !target.classList.contains("no-results")
  ) {
    const data = await resultsArray(target, bookmarks);
    spinner();

    await updateWeather(data.coords, handler);
  }
  if (target.classList.contains("add-bookmark")) {
    if (!isBookmark(target.dataset.lat, target.dataset.lon).found) {
      const coords = target.dataset.lat
        .toString()
        .concat(",", target.dataset.lon.toString());
      const data = await API_CALL(coords, "forecast");
      addBookmark(createWeatherObject(data));
    }
  }
  if (target.classList.contains("remove-bookmark")) {
    let index = bookmarks.findIndex((el) => {
      return target.dataset.coords === el.coords;
    });
    removeBookmark(index);
  }
};

const userLocation = async (position) => {
  const coords = position.coords.latitude
    .toString()
    .concat(",", position.coords.longitude.toString());

  await updateWeather(coords);
};

const blockedLocation = async () => {
  await updateWeather(defaultCoords);
};

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
export const spinner = () => {
  const spinner = document.querySelector(".spinner");

  spinner.classList.toggle("spinner-hidden");
};

init();
