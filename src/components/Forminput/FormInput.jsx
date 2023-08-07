import React, { useState } from "react";
import "./forminput.css";

// Displaying input fields
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputprops } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  // Return JSX representing a form input component
  return (
    <div className="formInput">
      {/* Display the label for the input */}
      <label>{label}</label>

      {/* Input element with spread props, onChange event handler, onBlur event handler, and focused attribute */}
      <input
        {...inputprops} // Spread additional input props
        onChange={onChange} // Handle input change event
        onBlur={handleFocus} // Handle input blur event
        focused={focused.toString()} // Convert focused state to string and pass it as an attribute
      />
    </div>
  );
};

// Export the FormInput component to make it accessible to other parts of the application
export default FormInput;
