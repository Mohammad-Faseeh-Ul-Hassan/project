import React from 'react';

function AfterCarousel() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Vertically center the content
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto', 
    marginLeft: '70px',
  };

  const textStyle = {
    flex: '1',
    padding: '20px', // Add some padding for spacing
    fontSize: '30px', // Increase the text size
    fontFamily: 'cursive', // Change the font family
    fontWeight: 'bold',
    color: 'blue', // Set the font color to blue
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?cs=srgb&dl=pexels-roman-odintsov-4551832.jpg&fm=jpg" // Replace with your image URL
        alt="Image Alt Text"
        style={imageStyle}
      />
      <div style={textStyle}>
        <p style={{marginRight:'70px'}}>"Welcome to our Recipe Sharing Website, a culinary community where food enthusiasts from around the world come together to explore, create, and share delicious recipes. Whether you're a seasoned chef or a novice in the kitchen."</p>
      </div>
    </div>
  );
}

export default AfterCarousel;
