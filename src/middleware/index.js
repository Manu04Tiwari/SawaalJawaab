const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../model/User");
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: "401", message: "Access token not provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ status: "401", message: "Access token not provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    
    if (!decoded || !decoded.user || !decoded.user.id) {
      return res.status(500).json({ status: "500", message: "Invalid Token" });
    }

    const userDetails = await User.findOne({ _id: decoded.user.id });

    if (!userDetails) {
      return res.status(500).json({ status: "500", message: "Invalid Token" });
    }

    req.user = decoded.user;
    next();

  } catch (error) {
    return res.status(500).json({ status: "500", message: "Invalid Token" });
  }
};

module.exports = {auth};
