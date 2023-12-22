import React, { useState } from 'react';
import { login } from '../Services/api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call signUp function from your API service
      const response = await login(loginData);
      console.log(response);
      if(response.data.message === true) {
        localStorage.setItem('token', response.data.token);
        if(response.data.email){
          localStorage.setItem('adminEmail', response.data.email);
          navigation('/admin');
        } else {
          localStorage.setItem('user', response.data.user.email);
          navigation('/home');
        }
      }
      // Display alert upon successful signup
      
      // Additional logic for signup process can be added here
      console.log('Login Data:', loginData);
    } catch (error) {
      // Handle signup failure or API errors here
      console.error('Login failed:', error);
      // You can also display an error alert if needed
      // alert('Signup failed. Please try again.');
    }
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginTop: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>
        <button type="submit" style={buttonStyles}>Login</button>
      </form>
    </div>
  );
};

export default Login;
