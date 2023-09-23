const phone = async (req, res, next) => {
  try {
    res.render("phone");
  } catch (error) {
    next(error);
  }
};
module.exports = phone;
