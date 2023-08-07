// Import necessary libraries and components
import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { ADMIN_USERNAME } from "../../common/Constants";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Pages/loginpage/auth";

// Define the Header component
function Header() {
  const navigate = useNavigate();

  // Access the authentication status and actions using the useAuth hook
  const auth = useAuth();

  // Define a function to handle user logout
  const hanldeLogout = () => {
    auth.logout(); // Call the logout function from the authentication context
  };

  return (
    <div className="header-list">
      <div className="nav-username">
        {/* Create a navigation link to the "Products" page */}
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={"/home"}
        >
          Products
        </NavLink>
      </div>

      {/* Conditionally display the admin username */}
      {auth.user && <div>{ADMIN_USERNAME}</div>}

      {/* Conditionally display a "Logout" link if a user is authenticated */}
      {auth.user && (
        <NavLink
          onClick={hanldeLogout} // Attach a click event to trigger logout
          style={{ textDecoration: "none", color: "white" }}
          className="log-out"
          to={"/"}
        >
          Logout
        </NavLink>
      )}
    </div>
  );
}

// Export the Header component to make it accessible to other parts of the application
export default Header;
