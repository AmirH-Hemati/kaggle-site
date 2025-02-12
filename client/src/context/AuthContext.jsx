import { createContext, useContext, useState } from "react";

const authContext = createContext();
function AuthContextProvider() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  function login(user) {
    localStorage.setItem("token", user?.token);
    localStorage.setItem("role", user?.role);
    setToken(user?.token);
    setRole(user?.role);
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setRole("");
  }
  return (
    <authContext.Provider
      value={{ token, role, login, logout }}
    ></authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
export { AuthContextProvider, useAuth };
