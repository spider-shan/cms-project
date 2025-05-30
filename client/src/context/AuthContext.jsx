import React, { createContext, useState,useContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize user state from localStorage or set to null if not found
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const login = (username, password) => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const match = savedUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (match) {
            setUser(match);
            localStorage.setItem("user", JSON.stringify(match));
            return true;
        }
        return false;
    };

    const signup = (username, password) => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const exists = savedUsers.some((u) => u.username === username);
        if (exists) return false;

        const newUser = { username, password };
        savedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(savedUsers));
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
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

export const useAuth = () => useContext(AuthContext);
