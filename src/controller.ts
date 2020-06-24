import { Response } from "./deps.ts";
import { getWeatherForCity } from "./get_weather.ts";

export class WeatherController {
  static async getByCityName(
    { params, response }: { params: { city: string }; response: Response },
  ) {
    response.body = await getWeatherForCity(params.city);
  }
}
