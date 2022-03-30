import dataBaseConnection from "Config/dataBase";
import cors from "cors";
import indexRouter from "Routes";
import express from "express";
import dotenv from "dotenv";
const { PORT } = dotenv.config().parsed;

dataBaseConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

app.listen(PORT, (error) => {
  error
    ? console.log("error 🙊 :", error)
    : console.log(`✊😎 Go 🏁 to http://localhost:${PORT}/`);
});
