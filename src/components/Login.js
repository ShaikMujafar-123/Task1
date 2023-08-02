import React, { useState } from 'react';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';
import "../components/Login.css";


const PostLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    DateofBirth: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  const [duplicateError, setDuplicateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    
    const isDuplicate = existingData.some((data) => {
      
      return JSON.stringify(data.username) === JSON.stringify(values.username);
    });

    if (isDuplicate) {
      
      alert('Data already exists. Please login');
      navigate('/');
      return;
    }
    
    const newData = [...existingData, values];

    
    localStorage.setItem('formData', JSON.stringify(newData));

    
    navigate('/');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setDuplicateError(false); 
  };

  return (
    <>
      <div className='Post-login'>
        <div className="Post-Login-fields">
          <form onSubmit={handleSubmit}>
            <h1 className='heading-post-login'>Registration</h1>
            
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
              name="email"
              type="email"
              placeholder="Email"
              errorMessage="It should be a valid email address"
              label="Email"
              required={true}
              value={values.email}
              onChange={onChange}
            />
            <FormInput
              name="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              errorMessage="Mobile number should be 10 digits"
              label="Mobile Number"
              pattern="[0-9]{10}"
              required={true}
              value={values.mobileNumber}
              onChange={onChange}
            />

            <FormInput
              name="DateofBirth"
              type="date"
              placeholder="Date of Birth"
              label="Date of Birth"
              required={true}
              value={values.DateofBirth}
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

            <FormInput
              name="confirmPassword"
              type="text"
              placeholder="Confirm Password"
              errorMessage="Passwords do not match"
              label="Confirm Password"
              pattern={values.password}
              required={true}
              value={values.confirmPassword}
              onChange={onChange}
            />
            <button className="Post-login-btn" type="submit">Submit</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default PostLogin
