import React from 'react';
import Footer from './Footer';
function OurAlumini() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Vertically center the content
  };

  const imageStyle = {
    marginTop:"70px",
    width: '40%',
    height: '50%',
    marginLeft: '200px',
  };

  const textStyle = {
    flex: '1',
    padding: '20px', // Add some padding for spacing
    fontSize: '18px', // Increase the text size
    fontFamily: 'cursive', // Change the font family
    fontWeight: 'bold',
    color: 'Black', // Set the font color to blue
  };

  const imageTextData = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1300835557/photo/smiling-male-cook-on-gray-background.jpg?s=612x612&w=0&k=20&c=3ie8X4mxTkPmgVXqlNIZxE2yyaxVb5R0H-5hnTCzLgI=',
      text: "I Am Mohammad Saleh From Pakistan and I have a very great Experience with RecipeHub",
    },
    {
      id: 2,
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTEyODc3OS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY5OTUwODIwNn0.Sb7BTqoM4IH0IRhw3_fK7ZMeGeT8touMGTqePNIx7tw/img.jpg?width=1200&height=800&quality=90&coordinates=48%2C59%2C66%2C17',
      text: "I Am Ragrezza Orlos From South Africa and I have a very great Experience with RecipeHub",
    },
    {
      id: 3,
      image: 'https://i.guim.co.uk/img/media/7d28c0ed6e54b7cc95e3ba05699adf519ae4f270/81_196_1882_1130/master/1882.jpg?width=465&dpr=1&s=none',
      text: "I Am John Kurdias From Italy and I have a very great Experience with RecipeHub.",
    },
    {
      id: 4,
      image: 'https://img.freepik.com/premium-photo/happy-male-chef-dressed-uniform-holding-wooden-spoon-roller-crossed-arms_156779-546.jpg',
      text: "I Am Raj Barman From India and I have a very great Experience with RecipeHub.",
    },
  ];

  return (
  
    <div>
          <h1 style={{textAlign:"center",marginTop:'20px',color:'red'}}>Our Alumini</h1>
      {imageTextData.map((item) => (
        <div key={item.id} style={containerStyle}>
          <img
            src={item.image}
            alt={`Image ${item.id} Alt Text`}
            style={imageStyle}
          />
          <div style={textStyle}>
            <p style={{ marginRight: '100px' }}>{item.text}</p>
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
}

export default OurAlumini;

