const User = require("../../model/user");

const sendotp = async (req, res, next) => {
  try {
    let { phone } = req.body;
    // console.log(req.body);
    // console.log(phone);
    let number = "0123456789";
    let otp = "";
    for (let i = 0; i < 4; i++) {
      otp += number[Math.floor(Math.random() * 10)];
    }
    let userphone = await User.findOne({ phone: phone });
    // console.log(userphone);
    if (userphone) {
      await User.updateOne({ phone: phone }, { $set: { otp: otp } });
    } else {
      await User.create({ phone, otp });
    }
    console.log(`verification otp is : ${otp}`);

    res.render("otp");
  } catch (error) {
    next(error);
  }
};
module.exports = sendotp;
