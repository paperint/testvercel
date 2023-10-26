import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logRouter from "./apps/writelogs.js";

async function init() {
  const app = express();
  const port = process.env.PORT || 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/log", logRouter);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
