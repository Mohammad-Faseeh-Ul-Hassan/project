import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { item } from '../App';
import { useContext } from 'react';
function NavBar() {
  const navLinkStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px 20px',
    color: "yellow",
  };

  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: '5px 20px',
    color: '#333',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const heartIconStyle = {
    fontSize: '2rem', 
    color: 'red',
  };
  const {v,sv}=useContext(item)
  return (
    <div style={navbarStyle}>
     
      <div>
        <img
          src="https://yt3.googleusercontent.com/IEphFfGUBvO89gFKN-oFjLLFm0UWMH23uV-H59nHIuwzjm5kBW5XN2xCHAQeM2OEudfNxneXJg=s900-c-k-c0x00ffffff-no-rj" 
          className="rounded"
          alt="Logo"
          style={logoStyle}
        />
      </div>
      <ul className="nav" style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>


        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/Home" className="nav-link" style={navLinkStyle}>Home</Link>
        </li>


        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/Recipe" className="nav-link" style={navLinkStyle}>Recipes</Link>
        </li>

        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/Careers" className="nav-link" style={navLinkStyle}>Careers</Link>
        </li>


        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/ContactUs" className="nav-link" style={navLinkStyle}>Contact Us</Link>
        </li>


        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/AboutUs" className="nav-link" style={navLinkStyle}>About Us</Link>
        </li>

        <li className="nav-item" style={{ margin: '0' }}>
          <Link to="/Account" className="nav-link" style={navLinkStyle}>Account</Link>
        </li>

       

        <li className="nav-item" style={{ margin: '0' }}>
          <FontAwesomeIcon icon={faHeart} style={heartIconStyle} /> 
          <h1>{v}</h1>
        </li>


      </ul>
    </div>
  );
}

export default NavBar;
