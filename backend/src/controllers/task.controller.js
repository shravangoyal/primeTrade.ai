const Task = require("../models/Task.model");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  // Make sure owner is assigned from logged-in user
  const task = new Task({
    title,
    description,
    owner: req.user.id,
  });

  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ owner: req.user.id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("owner", "name email");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

exports.updateTask = async (req, res) => {
  try {
    const { title } = req.body;

    // Find only task owned by this user
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { title },
      { new: true },
    );

    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
