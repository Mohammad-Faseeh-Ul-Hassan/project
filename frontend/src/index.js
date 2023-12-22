import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="531549317064-oop9oe5qenctb76tmbodav1ca01vtc3v.apps.googleusercontent.com">
  <App />
  </GoogleOAuthProvider>;
</BrowserRouter>
);

// reportWebVitals(); 