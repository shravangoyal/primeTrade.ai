import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let storedUser = null;
  let storedToken = null;

  try {
    storedUser = JSON.parse(localStorage.getItem("user"));
    storedToken = localStorage.getItem("token");
  } catch {
    storedUser = null;
    storedToken = null;
  }

  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
    setToken(data.token);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
