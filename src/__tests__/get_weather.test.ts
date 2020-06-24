import { denock, assertEquals } from "../deps.ts";
import { getWeatherForCity } from "../get_weather.ts";

const response = {
  main: {
    temp: 25,
    feels_like: 26.47,
    temp_min: 27.78,
    temp_max: 28.89,
    pressure: 1020,
    humidity: 40,
  },
};

denock({
  method: "GET",
  protocol: "https",
  host: "api.openweathermap.org",
  path: "/data/2.5/weather?q=mannheim,de&appid=undefined&units=metric",
  replyStatus: 200,
  responseBody: response,
});

Deno.test({
  name: "Get temperature, pressure and humidity",
  async fn() {
    const result = await getWeatherForCity("mannheim,de");
    assertEquals(result, { temperature: 25, humidity: 40, pressure: 1020 });
  },
});
