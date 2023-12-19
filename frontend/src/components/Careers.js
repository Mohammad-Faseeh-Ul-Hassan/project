import React, { useState } from 'react';
import Footer from './Footer';

const Careers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginTop: '20px',
  };

  const sectionStyle = {
    marginTop: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '15px',
  };

  const formStyle = {
    marginTop: '20px',
    border: '1px solid blue',
    borderRadius: '8px',
    padding: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '8px',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const textareaStyle = {
    ...inputStyle,
  };

  const submitButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    border: 'none',
    borderRadius: '4px',
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the application (you can add your logic here)
    console.log('Application Details:', { name, email, selectedPosition, coverLetter });
    // Reset the form after submission
    setName('');
    setEmail('');
    setSelectedPosition('');
    setCoverLetter('');
  };

  const footerStyle = {
    width: '100%',  // Set the width to 100% to fill from left to right
    marginTop: '20px',
    textAlign:'left',
  };
  return (
    <div>
    <div style={containerStyle}>
      <h1 style={headingStyle}>Join Our Team - Careers at RecipeHub</h1>
      <img
        src="https://www.maplehighways.com/assets/images/JOIN%20OUR%20TEAM.png" // Replace with the actual path to your image
        alt="Join Our Team"
        style={imageStyle}
      />

      <section style={sectionStyle}>
        <h2>Why Work With Us?</h2>
        <p>
          RecipeHub is a dynamic and innovative platform that brings people
          together through the joy of cooking and sharing recipes. We believe in
          fostering a collaborative and creative work environment where every
          team member can make a significant impact.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Open Positions</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Content Creator: Are you passionate about food and love creating
            engaging content? Join us as a Content Creator to produce
            mouth-watering recipe videos, blog posts, and social media content.
          </li>
          <li style={listItemStyle}>
            Community Manager: Build and nurture our community! As a Community
            Manager, you'll engage with our users, facilitate discussions, and
            ensure a positive and supportive environment.
          </li>
          <li style={listItemStyle}>
            Marketing Specialist: Help spread the word about RecipeHub! We're
            looking for a Marketing Specialist to develop and execute marketing
            strategies, including campaigns and partnerships.
          </li>
          <li style={listItemStyle}>
            Graphic Designer: Bring recipes to life visually! Join as a Graphic
            Designer to create stunning visuals for our website, social media,
            and promotional materials.
          </li>
          <li style={listItemStyle}>
            Culinary Editor: Ensure the quality of our recipe content! As a
            Culinary Editor, you'll review and enhance recipes, ensuring they
            meet our standards for accuracy and clarity.
          </li>
          {/* Add more positions as needed */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>How to Apply</h2>
        <p>
          To apply for any of the positions listed above, please fill out the
          application form below.
        </p>

        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Your Name:
            <input
              style={inputStyle}
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label style={labelStyle}>
            Your Email:
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label style={labelStyle}>
            Position:
            <select
              style={selectStyle}
              value={selectedPosition}
              onChange={handlePositionChange}
              required
            >
              <option value="" disabled>
                Select a position
              </option>
              <option value="Content Creator">Content Creator</option>
              <option value="Community Manager">Community Manager</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="Culinary Editor">Culinary Editor</option>
              <option value="Graphic Designer">Graphic Designer</option>
            </select>
          </label>

          <label style={labelStyle}>
            Cover Letter:
            <textarea
              style={textareaStyle}
              value={coverLetter}
              onChange={handleCoverLetterChange}
              placeholder="Write a brief cover letter"
              required
            />
          </label>

          <button style={submitButtonStyle} type="submit">
            Submit Application
          </button>
        </form>
      </section>
    </div>
    <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
