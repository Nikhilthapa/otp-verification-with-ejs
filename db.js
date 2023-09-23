const mongoose = require("mongoose");
require("dotenv").config();
const { mongo_url } = process.env;
// console.log(mongo_url);
const ConnectToDb = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectToDb;
