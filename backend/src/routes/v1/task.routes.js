const router = require("express").Router();
const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../../controllers/task.controller");

router.use(auth);

router.patch("/:id", auth, updateTask);
router.get("/all", auth, role("admin"), getAllTasks);
router.post("/", createTask);
router.get("/", getTasks);
// router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
