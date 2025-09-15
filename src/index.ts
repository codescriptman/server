import { app } from "./app.js";
import { getCvRouter } from "./router/cv.js";
import { middleware } from "./middlewares/middleware.js";
import { dbRun } from "./db/db.js";
import cors from "cors";

app.use(
  cors({
    origin: ["https://codescriptman.github.io", "http://localhost:5173"], // твой фронтенд
    methods: ["GET", "POST", "OPTIONS"], // какие методы разрешены
    allowedHeaders: ["Content-Type"], // какие заголовки можно слать
  })
);

app.use("/cv", getCvRouter());

const port = process.env.PORT || 3000;

const startApp = async () => {
  await dbRun();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
