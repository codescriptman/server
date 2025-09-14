import { app } from "./app.js";
import { getCvRouter } from "./router/cv.js";
import bodyParser from "body-parser";
import { middleware } from "./middlewares/middleware.js";
import { dbRun } from "./db/db.js";

app.use(bodyParser.json());
app.use("/cv", getCvRouter());

const port = process.env.PORT || 3000;

const startApp = async () => {
  await dbRun();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
