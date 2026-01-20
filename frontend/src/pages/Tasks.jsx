import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const loadTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // CREATE
  const createTask = async () => {
    try {
      await axios.post("/tasks", { title });
      setTitle("");
      setMessage("Task created successfully");
      loadTasks();
    } catch {
      setMessage("Error creating task");
    }
  };

  // DELETE
  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    loadTasks();
  };

  // START EDIT
  const startEdit = (task) => {
    setEditingId(task._id);
    setEditingTitle(task.title);
  };

  // CANCEL EDIT
  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  // SAVE UPDATE 🔥
  const saveEdit = async (id) => {
    try {
      await axios.patch(`/tasks/${id}`, { title: editingTitle });
      setEditingId(null);
      setEditingTitle("");
      loadTasks();
    } catch {
      alert("Error updating task");
    }
  };

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>

      {/* CREATE */}
      <div className="task-form">
        <input
          placeholder="New task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createTask}>Add</button>
      </div>

      {message && <p>{message}</p>}

      {/* LIST */}
      {tasks.map((t) => (
        <div className="task-item" key={t._id}>
          {/* NORMAL VIEW */}
          {editingId !== t._id ? (
            <>
              <span className="task-title">{t.title}</span>

              <div>
                <button className="edit-btn" onClick={() => startEdit(t)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(t._id)}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            /* EDIT MODE */
            <>
              <input
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />

              <div>
                <button className="save-btn" onClick={() => saveEdit(t._id)}>
                  Save
                </button>

                <button className="cancel-btn" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
