const User = require("../../model/user");

const verifyotp = async (req, res, next) => {
  try {
    let { otp } = req.body;
    // console.log(req.body);
    // console.log(otp);
    let userotp = await User.findOne({ otp: otp });
    // console.log(userotp);
    if (otp == userotp.otp)
      res.status(200).redirect("https://www.admitkard.com/");
    res.status(400).json({
      message: "otp is wrong",
    });
    // console.log("zsdxfgcgvhbj");
  } catch (error) {
    next(error);
  }
};
module.exports = verifyotp;
