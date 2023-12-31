// Import necessary libraries and components
import { useAuth } from "./auth"; // Import the custom authentication hook
import { Navigate } from "react-router-dom";

// Create a component named RequireAuth to protect routes that require authentication
export const RequireAuth = ({ children }) => {
  // Access the authentication context using the useAuth hook
  const auth = useAuth();

  // Check if the user is authenticated
  if (!auth.user) {
    // If not authenticated, redirect to the login page 
    return <Navigate to="/" />;
  }

  // If authenticated, render the provided children (route content)
  return children;
};
