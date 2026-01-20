// src/routes/v1/user.routes.js
const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth.middleware");
const userController = require("../../controllers/user.controller");
const role = require("../../middlewares/role.middleware");

router.delete("/:id", auth, role("admin"), userController.deleteUser);
router.get("/me", auth, userController.getMe);
router.get("/", auth, role("admin"), userController.getAllUsers);

module.exports = router;
