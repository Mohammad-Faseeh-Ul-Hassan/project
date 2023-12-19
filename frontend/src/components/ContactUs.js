import React, { useState } from 'react';
import Footer from './Footer';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const contactStyle = {
  marginTop: '20px',
};

const formStyle = {
  width: '70%',
  margin: '20px auto',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  border: '2px solid #007BFF',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #007BFF',
  color: '#333',
};

const buttonStyle = {
  background: '#007BFF',
  color: 'white',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const footerContainerStyle = {
  width: '100%', // Adjusted width to fill the available space
};

const mapStyle = {
  width: '70%',
  border:'2px solid #007BFF',// Adjusted width to fill the available space
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
  
};

const imageStyle = {
  width: '200px',
  marginTop:'20px', // Adjust the width as needed
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://dpaa-mil.sites.crmforce.mil/resource/1693592270000/dpaaFamWebContactUs/ContactUs.png"
        alt="Contact Us Image"
        style={imageStyle}
      />
      <div style={contactStyle}>
        <p>Welcome to our Contact Us page.</p>
        <p>If you have any questions or need assistance, feel free to reach out to us:</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div style={formStyle}>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '150px' }}
          />
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
      <h1 style={{color:'RED',fontWeight:'bold'}}>ALSO VISIT US</h1>
      <div style={mapStyle}>
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d828.901189488587!2d72.75177426976913!3d33.79670338361212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1698569812796!5m2!1sen!2s"
          allowFullScreen
        ></iframe>
      </div>
      <div style={footerContainerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
