const phone = require("../controller/otp/phone");
const sendotp = require("../controller/otp/sendotp");
const verifyotp = require("../controller/otp/verifyotp");
// const sendotp = require("../controller/otp/verifyotp");

const router = require("express").Router();
// router.post("/otp", sendotp);
router.get("/", phone);
router.post("/signUp", sendotp);
router.post("/otpverfied", verifyotp);
module.exports = router;
