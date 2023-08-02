import FormInput from "./FormInput";
import "./../App.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from "../redux1/slices/userSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you are using localStorage to store existing user data
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log(existingData,"existingData")

    const isDuplicate = existingData.find((data) => {
      if (
        data.username === values.username 
      ) {
        return data.username;
      }
    });
    console.log("Issss",isDuplicate)

    if (!isDuplicate) {
      alert("Data Does not exist. Please login");
      navigate("/login");
      return;
    }

    // Dispatch the addUser action with the correct payload
    dispatch(addUser(isDuplicate.username));
    console.log("RRR",isDuplicate.username)
    navigate("/shoppingprod");
  };
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errorMessage="Username should be a combination of letters and digits of 3 to 16 characters"
          label="Username"
          pattern="^[A-Za-z]{3,16}$"
          required={true}
          value={values.username}
          onChange={onChange}
        />

        <FormInput
          name="password"
          type="text"
          placeholder="Password"
          errorMessage="Password should be 8 characters"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          label="Password"
          required={true}
          value={values.password}
          onChange={onChange}
        />

        <button className="btn" type="submit">Login</button>
        <p className="Login-btn" onClick={() => navigate("/login")}>Don't have an Account? Register Here</p>
      </form>
    </div>
  );
};

export default Create;
