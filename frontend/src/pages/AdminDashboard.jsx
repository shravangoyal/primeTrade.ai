import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/admin.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  // Load all users
  const loadUsers = async () => {
    const res = await axios.get("/users");
    setUsers(res.data);
  };

  // Load all tasks
  const loadTasks = async () => {
    const res = await axios.get("/tasks/all");
    setTasks(res.data);
  };

  useEffect(() => {
    loadUsers();
    loadTasks();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      setMessage("User deleted");
      loadUsers();
    } catch {
      setMessage("Cannot delete user");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      {message && <p>{message}</p>}

      {/* USERS SECTION */}
      <h3>All Users</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                {u.role !== "admin" && (
                  <button onClick={() => deleteUser(u._id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TASKS SECTION */}
      <h3>All Tasks</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.owner?.name}</td>
              <td>{t.owner?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
