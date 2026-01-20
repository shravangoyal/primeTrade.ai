import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Role:</b> {user.role}
      </p>

      <div className="dashboard-links">
        <Link to="/tasks">My Tasks</Link>

        {user.role === "admin" && <Link to="/admin">Admin Panel</Link>}
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
