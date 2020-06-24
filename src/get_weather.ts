const API_KEY = Deno.env.get("WEATHER_API_KEY");

/**
 * Get weather for specified city
 * @param {string} city
 * @return {object} current temperature, humidity and pressure
 */
export async function getWeatherForCity(city: string) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  const data = await result.json();

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
  };
}
