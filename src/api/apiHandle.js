import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";



const apiKey = import.meta.env.VITE_API_KEY;
const MAIN_URL = "https://api.weatherapi.com/v1";

const floatFun = (val) => {
  const tempVal = Math.floor(val);
  return tempVal.toString();
};

const timeFun = (val) => {

  const tempVal = new Date(val);
  let tempHour = tempVal.getHours();
  const ampm = tempHour >= 12 ? "PM" : "AM";
  tempHour =
    tempHour % 12 != 0 ? (tempHour % 12).toString().padStart(2, "0") : "12";

  const timeObj = {
    hour: tempHour,
    ampm: ampm,
  };

  return timeObj;
};

export const fetchCurrentWeather = async (city = "kolkata") => {
  const URL = MAIN_URL + "/forecast.json";
  try {
    const response = await axios.get(URL, {
      params: {
        q: city,
        key: apiKey,
      },
    });

    const current = response.data["current"];
    const forecast = response.data["forecast"]["forecastday"][0];
    const name = response.data["location"]["name"];
    const icon = current["condition"]["code"].toString();
    const temp = floatFun(current["temp_c"]);
    

    // temp by hours array 
    const tempByHour = forecast["hour"];

    const dayTemp = [];
    Object.keys(tempByHour).forEach((val) => {
      const currElement = tempByHour[val]
      const icon = "_"+ currElement["condition"]["code"].toString()

      const tempObj = {
        temp: floatFun(currElement["temp_c"]),
        icon: assets[icon],
        time: timeFun(currElement["time"]),
      };
      dayTemp.push(tempObj)
    });

    // temp of hours array work end 
    
    const cwc = {
      // current weather card
      icon: "_" + icon,
      temp: temp,
      name: name,
      text: current["condition"]["text"].toString(),
      sun_set: forecast["astro"]["sunset"],
      sun_rise: forecast["astro"]["sunrise"],
    };

    const cc = {
      // current condition
      real_feel: current["feelslike_c"].toString(),
      wind_speed: current["wind_kph"].toString(),
      rain_chance: forecast["day"]["daily_chance_of_rain"].toString(),
      humidity: current["humidity"].toString(),
      uv: current["uv"].toString(),
      cloud: current["cloud"].toString(),
    };

    return { cwc, cc, dayTemp };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    toast.error(error)
    throw error;
  }
};
