import { app } from "./app.js";
import { getCvRouter } from "./router/cv.js";
import bodyParser from "body-parser";
import { middleware } from "./middlewares/middleware.js";
import { dbRun } from "./db/db.js";
import cors from "cors";

//https://codescriptman.github.io

app.use(bodyParser.json());
app.use("/cv", getCvRouter());
app.use(
  cors({
    origin: "http://localhost:5173", // твой фронтенд
    methods: ["GET", "POST", "OPTIONS"], // какие методы разрешены
    allowedHeaders: ["Content-Type"], // какие заголовки можно слать
  })
);

const port = process.env.PORT || 3000;

const startApp = async () => {
  await dbRun();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
