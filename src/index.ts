import { app } from "./app.js";
import { getSkillsRouter } from "./router/skills.js";
import bodyParser from "body-parser";
import { middleware } from "./middlewares/middleware.js";
import { dbRun } from "./db/db.js";

app.use(bodyParser.json());
app.use("/skills", getSkillsRouter());

const port = process.env.PORT || 3000;

const startApp = async () => {
  await dbRun();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
