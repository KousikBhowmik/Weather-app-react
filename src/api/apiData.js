import axios from "axios";

const API_KEY = "your_api_key"; // Replace with your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // You can change this to 'imperial' if needed
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
