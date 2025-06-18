import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();
    // Check if user is authenticated
    // If user is authenticated, render the children components
    // If not, redirect to the login page
    return user ? children : <Navigate to="/login" />;
}
