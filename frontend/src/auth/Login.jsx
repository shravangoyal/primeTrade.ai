import { useContext, useState } from "react";
import axios from "../api/axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/auth.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // 🔥 important
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);

      // Save token & user
      login(res.data);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="auth-message error">{error}</p>}

      {/* 🔥 REGISTER LINK */}
      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
