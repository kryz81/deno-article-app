// load environment variables
import "https://deno.land/x/dotenv/load.ts";

import app from "./app.ts";

const APP_PORT = Number(Deno.env.get("APP_PORT"));

console.log(`Listening on port ${APP_PORT}`);

await app.listen({ port: APP_PORT });
