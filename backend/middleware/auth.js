const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to verify JWT and authenticate user
const protect = async (req, res, next) => {
  let token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) return res.status(401).json({ message: "User not found" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

// Middleware to restrict access to admin-only routes
const adminOnly = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access Denied: Admins only" });
  }
  next();
};

module.exports = { protect, adminOnly };
