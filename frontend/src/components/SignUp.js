import React, { useState } from 'react';
import { signUp } from '../Services/api';
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
  auth,
  provider as googleProvider,
  signInWithPopup,
  signOut,
} from './firebase';
const SignUp = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userData = {
        displayName: user.displayName,
        email: user.email,
        // Add more user data if needed
      };
      console.log(userData)

      // Call collectData to handle storing user data
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(userData);
      alert('Sign Up Successful');
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Signup failed:', error);
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

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        navigation('/home');
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const formFields = [
    { label: 'Email:', name: 'email', type: 'email' },
    { label: 'Password:', name: 'password', type: 'password' },
  ];

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginTop: '20px' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        {formFields.map((field, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <label htmlFor={field.name} style={{ fontWeight: 'bold' }}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={userData[field.name]}
              onChange={handleChange}
              required
              style={inputStyles}
            />
          </div>
        ))}
        <button type="submit" style={buttonStyles}>Sign Up</button>
      </form>
      <div style={{ textAlign: "center" }}>
  <h2 style={{marginTop:'10px'}}>OR</h2>
</div>
      {/* <button
        onClick={() => login()}
        style={{ background: "#007bff", color: "white", padding: "10px", display: "flex", alignItems: "center", marginTop: '20px',width: '100%',justifyContent: "center" }}
      >
        <FontAwesomeIcon  icon={faGoogle} style={{ marginRight: "5px", color: "red" }} />
        Sign in with Google
      </button> */}
      <button onClick={signInWithGoogle}
       style={{ background: "#007bff", color: "white", padding: "10px", display: "flex", alignItems: "center", marginTop: '20px',width: '100%',justifyContent: "center" }}>
        <FontAwesomeIcon  icon={faGoogle} style={{ marginRight: "5px", color: "red" }} />
        Sign with google</button>
    </div>
  );
};

export default SignUp;








// import React, { useState } from 'react';
// import { signUp } from '../Services/api';

// const SignUp = () => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Call signUp function from your API service
//       await signUp(userData);
//       // Display alert upon successful signup
//       alert('SignUp Successfully');
//       // Additional logic for signup process can be added here
//       console.log('User Data:', userData);
//     } catch (error) {
//       // Handle signup failure or API errors here
//       console.error('Signup failed:', error);
//       // You can also display an error alert if needed
//       // alert('Signup failed. Please try again.');
//     }
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '8px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   };

//   const buttonStyles = {
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
//       <h2 style={{ marginTop: '20px' }}>Sign Up</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}> {/* Added marginTop to create space */}
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//             required
//             style={inputStyles}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={userData.password}
//             onChange={handleChange}
//             required
//             style={inputStyles}
//           />
//         </div>
//         <button type="submit" style={buttonStyles}>Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
