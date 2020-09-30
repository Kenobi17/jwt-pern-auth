require("dotenv").config();
const jwt = require("jsonwebtoken");

const middleware = {
  isAuthorized: async (req, res, next) => {
    try {
      const jwToken = req.header("token");
      if (!jwToken) {
        return res.status(403).json("Please login first");
      }
      const payload = jwt.verify(jwToken, process.env.jwtSecret);
      req.user = payload.user;
    } catch (err) {
      //console.error(err); COMMENTED OUT BECAUSE EVERYTIME A USER LOADS THE PAGE
      // WITHOUT LOGIN IN FIRST, THE CONSOLE PRINTS jwt malformed
      return res.status(403).json("You are not allowed to do that");
    }

    next();
  },

  isValidInfo: (req, res, next) => {
    const { email, name, password } = req.body;
    validEmail = (userEmail) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    };
    if (req.path === "/register") {
      if (![email, name, password].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email");
      }
    }

    next();
  },
};

module.exports = middleware;
