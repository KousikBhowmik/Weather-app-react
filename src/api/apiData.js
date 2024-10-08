import axios from "axios";

const API_KEY = decodeURIComponent("a6acde97c15eda31b7a595d33d6c4d0a");
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city="Barcelona") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", 
      },
    });
    const name = response.data["name"];
    const main = response.data["main"];
    const wind = response.data["wind"];
    const typeWeather = response.data["weather"][0]["main"];

    const mainData = {
      temp: main["temp"],
      feel_like:main["feels_like"],
      humidity: main["humidity"],
      max_temp:main["temp_max"],
      min_temp:main["temp_min"],
    };

    const windData = wind["speed"];
    
    return {name, mainData, windData, typeWeather}
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};