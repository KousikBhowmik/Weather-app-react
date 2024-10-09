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
    const windData = response.data["wind"]["speed"];
    const typeWeather = response.data["weather"][0]["main"];

    // main data 
    let temp = main["temp"]
    temp = Math.floor(temp)
    let feelLike = main["feels_like"]
    feelLike = Math.floor(feelLike);
    const humidity = main["humidity"];

    const mainData = {
      temp: temp.toString().padStart(2,"0"),
      feel_like: feelLike.toString(),
      humidity: humidity.toString(),
      max_temp:main["temp_max"],
      min_temp:main["temp_min"],
    };
    // console.log(response.data);
    
    return {name, mainData, windData, typeWeather}
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


export const timeFun = async () =>{
  const currTime = new Date()
  let temp = currTime.getHours();
  let amPm = temp >=12? "PM" : "AM";
  temp = temp % 12
  const time = {
    hour: temp ? temp.toString().padStart(2, "0") : "12",
    ampm: amPm,
    min: currTime.getMinutes().toString().padStart(2, "0"),
    year: currTime.getFullYear().toString(),
    month: currTime.getMonth().toString().padStart(2, "0"),
    date: currTime.getDate().toString().padStart(2, "0"),
  };
  // console.log(time);
  
  return time;
  
}