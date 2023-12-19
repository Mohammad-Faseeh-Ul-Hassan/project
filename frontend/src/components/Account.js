import React from 'react';
import { Link } from 'react-router-dom';

function Account() {
  const navLinkStyle = {
    textDecoration: 'none',
    marginRight: '20px',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#f44336',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid #f44336',
    transition: 'background-color 0.3s ease',
  };

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto 0', // Centering the container with top margin
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: 'green',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Recipe Hub</h1>
      <p style={paragraphStyle}>
        Thank you for choosing Recipe Hub! To explore our recipes and features, please proceed by logging in or signing up for an account.
      </p>
      <div style={linkContainerStyle}>
        <Link to="/Login" style={navLinkStyle}>Login</Link>
        <Link to="/SignUp" style={navLinkStyle}>SignUp</Link>
      </div>
      <p>
        If you're new here, click on "SignUp" to create an account and start your culinary journey with us!
      </p>
    </div>
  );
}

export default Account;
