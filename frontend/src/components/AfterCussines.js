import React from 'react';

function AfterCussines() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Display image and text in a column
    alignItems: 'center', // Horizontally center the content
  };

  const imageStyle = {
    width: '80%', // Adjust the width of the image as needed
    height: '500px', // Maintain aspect ratio
    objectFit: 'cover', // Ensures the image covers the container without stretching or compressing
  };

  const textStyle = {
    padding: '20px', // Add some padding for spacing
    fontSize: '30px', // Increase the text size
    fontFamily: 'cursive', // Change the font family
    fontWeight: 'bold',
    color: 'blue', // Set the font color to blue
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://img.freepik.com/premium-photo/professional-chef-preparing-food-hd-photo_930284-128.jpg" 
        alt="Image Alt Text"
        style={imageStyle}
      />
      <div style={textStyle}>
        <p style={{marginLeft:"115px",marginRight:"80px"}}>
          "Embark on a journey of culinary mastery with our Recipe Sharing Platform! Whether you're a seasoned chef or a passionate home cook, there is always room for growth and excellence in the world of gastronomy."
        </p>
      </div>
    </div>
  );
}

export default AfterCussines;
