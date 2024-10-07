
const data = async (cityName) => {
  const city = encodeURIComponent(cityName.toLowerCase());
  const apiKey = encodeURIComponent("a7013d8677068944b71ff8f35ec7f5be");
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Location data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default data;
