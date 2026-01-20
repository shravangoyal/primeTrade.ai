const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/v1/auth.routes");
const taskRoutes = require("./routes/v1/task.routes");
const userRoutes = require("./routes/v1/user.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(errorMiddleware);

module.exports = app;
