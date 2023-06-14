export const API = "f69871db34ac42019b8170127231205";
export const DEFAULT_COORDS = "51.509865, -0.118092";

// API template
export const API_CALL = async (input, call) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/${call}.json?key=${API}&q=${input}&days=3&alerts=yes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
export const appContainer = document.querySelector(".app");
