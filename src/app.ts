import { Application } from "./deps.ts";
import { routing } from "./routing.ts";

const app = new Application();

app.use(routing.routes());
app.use(routing.allowedMethods());

export default app;
