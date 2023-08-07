// Import necessary libraries and components
import FormInput from "../../components/Forminput/FormInput";
import React, { useState } from "react";
import "./login.css";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../common/Constants";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth"; // Import the custom authentication hook
import Header from "../../components/Header/Header";

// Define the Login component
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth(); // Access the authentication context using the hook

  // Initialize state to store the username and password
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the provided username and password match the admin credentials
    if (
      values.username === ADMIN_USERNAME &&
      values.password === ADMIN_PASSWORD
    ) {
      // Call the login function from the authentication context
      auth.login(values.username);
      // Navigate to the home page upon successful login
      navigate("/home");
    }
  };

  // Function to handle input changes and update the state
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Return JSX representing the login page
  return (
    <div>
      {/* Include the application header */}
      <Header />

      <div className="login-con">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          {/* Render FormInput components for username and password */}
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            label="Username"
            required={true}
            value={values.username}
            onChange={onChange}
          />

          <FormInput
            name="password"
            type="password" // Change the input type to password for secure entry
            placeholder="Password"
            label="Password"
            required={true}
            value={values.password}
            onChange={onChange}
          />
          {/* Button to trigger form submission */}
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

// Export the Login component to make it accessible to other parts of the application
export default Login;
