const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = (req, res, next) => {

  const { jwtoken } = req.headers;
  try {
    const user = jwt.verify(jwtoken, process.env.JWT_SCRETEKEY);
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Token expired" });
    } else {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = isLoggedIn;
