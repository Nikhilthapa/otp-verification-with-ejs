const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  phone: {
    type: Number,
    trim: true,
  },
  otp: {
    type: Number,
    trim: true,
  },
});
const User = mongoose.model("AdmitKart", userschema);
module.exports = User;
