const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = (req, res, next) => {
  const { jwToken } = req.header("Authorization");
  console.log(jwToken);
  try {
    const user = jwt.verify(jwToken, process.env.JWT_SCRETEKEY);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "FAILED",
      message: "You have not logged in! Please login",
    });
  }
};

module.exports = isLoggedIn;
