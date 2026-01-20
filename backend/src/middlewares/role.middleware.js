// src/middlewares/role.middleware.js
module.exports = function (roles = []) {
  // roles can be a string or array of allowed roles
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    next();
  };
};
