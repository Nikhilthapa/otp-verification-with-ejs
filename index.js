const express = require("express");
const ConnectToDb = require("./db");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
// const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));
require("dotenv").config();
const { PORT } = process.env;

const start = async () => {
  try {
    console.log("server is starting....");
    await ConnectToDb();
    app.listen(PORT, () => console.log(`Server ruunig on the port of ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
