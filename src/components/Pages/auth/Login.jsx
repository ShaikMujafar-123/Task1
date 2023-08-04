import FormInput from '..//../Forminput/FormInput';
import React, { useState } from 'react';
import './login.css'
import { ADMIN_USERNAME,ADMIN_PASSWORD } from '../../constants/Logindata';

import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import Header from '../../Common/Header';



const Login = () => {
    const navigate = useNavigate()
    const auth = useAuth()
 

  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username === ADMIN_USERNAME && values.password === ADMIN_PASSWORD) {
      console.log("FIRST")
      auth.login(values.username)
      
        navigate('/home')
        
    }
  };
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const handleLogin = () => {
    
  //   navigate('/')
    
  // }

 
  
  return (
    <div>
      <Header/>
    
    <div className="login-con">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

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
          type="text"
          placeholder="Password"
         
          
          label="Password"
          required={true}
          value={values.password}
          onChange={onChange}
          
        />
{/* type="submit" */}
        <button  className="btn"  >Login</button>
        
      </form>
    </div>
    </div>
  );
};

export default Login;
