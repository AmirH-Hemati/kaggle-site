import { createContext, useContext, useState } from "react";

const authContext = createContext();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  function loginInAccount(user) {
    localStorage.setItem("token", user?.data?.token);
    localStorage.setItem("role", user?.data?.role);
    setToken(user?.data?.token);
    setRole(user?.data?.role);
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setRole("");
  }
  return (
    <authContext.Provider value={{ token, role, loginInAccount, logout }}>
      {children}
    </authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
export { AuthContextProvider, useAuth };
