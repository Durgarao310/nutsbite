const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token || authHeader) {
    return res.status(401).send({ err: "Token is expired" });
  }
  try {
    jwt.verify(token || authHeader, process.env.SECRET_TOKEN);
    next();
  } catch (err) {
    res.status(400).send({ err: "Invalid Token" });
  }
};

module.exports = auth;
