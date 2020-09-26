const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {  
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "SECRET_WORD");
    const userId = decodedToken.userId;
    if (req.userId && req.userId !== userId) {
      throw "Invalid User Id!";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error("Invalid Request!") });
  }
};
