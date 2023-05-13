const jwt = require("jsonwebtoken"); // model of  Web tokens
require("dotenv").config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(403).json({ status: 403, message: "No token found" }); //checking if ther is available token
  }
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET); // verfiying token
    next();
    return payload;
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
module.exports = verifyToken;
