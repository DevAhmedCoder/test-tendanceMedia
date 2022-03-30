import mongoose from "mongoose";
import dotenv from "dotenv";

const { URI } = dotenv.config().parsed;

const dataBaseConnection = async () => {
  try {
    await mongoose
      .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log(`Database is connect ! 😉👉📝`));
  } catch (err) {
    console.log("Database doesn't connect ! 🙈 :", err.message);
  }
};

export default dataBaseConnection;
