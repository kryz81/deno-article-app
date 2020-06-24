import { Router } from "./deps.ts";
import { WeatherController } from "./controller.ts";

export const routing = new Router();

routing
  .get("/city/:city", WeatherController.getByCityName);
