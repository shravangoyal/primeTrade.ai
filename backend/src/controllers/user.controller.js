// src/controllers/user.controller.js
const User = require("../models/User.model");
const Task = require("../models/Task.model");

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    await Task.deleteMany({ owner: userId });

    await User.findByIdAndDelete(userId);

    res.json({ message: "User and all related tasks deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
