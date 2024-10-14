import axios, { all } from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import "react-toastify/dist/ReactToastify.css";

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
  const day = tempVal.getDay().toString();
  const timeObj = {
    hour: tempHour,
    ampm: ampm,
    day: day,
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
        days: 7,
      },
    });

    const dayList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const current = response.data["current"];
    const forecast = response.data["forecast"]["forecastday"][0];
    const name = response.data["location"]["name"];
    const icon = current["condition"]["code"].toString();
    const temp = floatFun(current["temp_c"]);
    const localTime = new Date(response.data["location"]["localtime"]);
    const baseHour = localTime.getHours();
    const maxHour = baseHour + 24;
    const dayTemp = []; // array of temp per hour
    const sdfArray = []; // array of perday temp 
    let i = 0;

    // 7 day forecast & per hour temp

    const allForecast = response.data["forecast"]["forecastday"];

    for (let n = 0; n < allForecast.length; n++) {
      const element = allForecast[n];

      for (let j = 0; j < element["hour"].length && i <= maxHour; j++) {
        if (i <= baseHour) {
          i++;
          continue;
        }
        const temp = element["hour"][j];
        const tempCondition = temp["condition"];
        const icon = "_" + tempCondition["code"].toString();
        const tempObj = {
          temp: floatFun(temp["temp_c"]),
          icon: assets[icon],
          text: tempCondition["text"],
          time: timeFun(temp["time"]),
        };
        dayTemp.push(tempObj);
        i++;
      }

      let day = null;
      if (n <= 1) {
        day = n == 0 ? "Today" : "Tomorrow";
      } else {
        day = dayList[n];
      }

      const condition = element["day"]["condition"];
      const sdfIcon = "_" + condition["code"].toString();
      const sdf = {
        // sdf = seven day forecast
        day: day,
        icon: assets[sdfIcon],
        text: condition["text"],
        max_temp: floatFun(element["day"]["maxtemp_c"]),
        min_temp: floatFun(element["day"]["mintemp_c"]),
      };

      sdfArray.push(sdf);
    }
    
    

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

    return { cwc, cc, dayTemp, sdfArray };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    toast.error("city not found");
    throw error;
  }
};
