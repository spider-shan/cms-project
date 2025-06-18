import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage or set to null if not found
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function expects email and password
  const login = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const match = savedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      setUser(match);
      localStorage.setItem("user", JSON.stringify(match));
      return true;
    }
    return false;
  };

  // Signup function to add new user with full user data
  // (This can be optional if you do signup outside this context)
  const signup = (newUser) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = savedUsers.some((user) => user.email === newUser.email);
    if (exists) return false;

    savedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier usage in components
export const useAuth = () => useContext(AuthContext);
