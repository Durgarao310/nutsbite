const jwt = require("jsonwebtoken");
const usePasswordHashToMakeToken = (user) => {
  // highlight-start
  const { password, _id, createdAt } = user;
  const secret = password + "-" + createdAt;
  const token = jwt.sign({ _id }, secret, {
    expiresIn: "20d" // it will be expired after 20 days
  });
  // highlight-end
  return token;
};

module.exports = usePasswordHashToMakeToken;
