const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(403).json({ status: 403, message: "No token found" });
  }
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    next();
    return payload;
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = verifyToken;
