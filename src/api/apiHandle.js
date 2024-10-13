import axios from "axios";


const apiKey = import.meta.env.VITE_API_KEY;
const MAIN_URL = "https://api.weatherapi.com/v1";

export const fetchCurrentWeather = async (city="kolkata") => {
    const URL = MAIN_URL + "/forecast.json";
    
    try {
      const response = await axios.get(URL, {
        params: {
          q: city,
          key: apiKey
        },
      });
      
      const current = response.data["current"]; 
      const forecast = response.data["forecast"]["forecastday"][0];
      const name = response.data["location"]["name"];
      const icon = current["condition"]["code"].toString();
      let temp = current["temp_c"]
      temp = Math.floor(temp)

      
      
      const cwc = { // current weather card
        icon: "_" + icon,
        temp: temp.toString(),
        name: name,
        text: current["condition"]["text"].toString(),
        sun_set: forecast["astro"]["sunset"],
        sun_rise: forecast["astro"]["sunrise"],
      };

      const cc = {  // current condition
        real_feel: current["feelslike_c"].toString(),
        wind_speed: current["wind_kph"].toString(),
        rain_chance: forecast["day"]["daily_chance_of_rain"].toString(),
        humidity: current["humidity"].toString(),
        uv: current["uv"].toString(),
        cloud: current["cloud"].toString()
      }
      
      return {cwc, cc};
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
};
