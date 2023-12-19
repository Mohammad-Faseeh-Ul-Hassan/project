import React from 'react';

function ChefCards() {
  const cardData = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1300835557/photo/smiling-male-cook-on-gray-background.jpg?s=612x612&w=0&k=20&c=3ie8X4mxTkPmgVXqlNIZxE2yyaxVb5R0H-5hnTCzLgI=',
      title: 'Mohammad Saleh',
      
    },
    {
      id: 2,
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTEyODc3OS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY5OTUwODIwNn0.Sb7BTqoM4IH0IRhw3_fK7ZMeGeT8touMGTqePNIx7tw/img.jpg?width=1200&height=800&quality=90&coordinates=48%2C59%2C66%2C17',
      title: 'Ragrezza Orlos',
     
    },
    {
      id: 3,
      image: 'https://i.guim.co.uk/img/media/7d28c0ed6e54b7cc95e3ba05699adf519ae4f270/81_196_1882_1130/master/1882.jpg?width=465&dpr=1&s=none',
      title: 'John Kurdias',
     
    },
    {
      id: 4,
      image: 'https://img.freepik.com/premium-photo/happy-male-chef-dressed-uniform-holding-wooden-spoon-roller-crossed-arms_156779-546.jpg',
      title: 'Raj Barman',
     
    },
    {
      id: 5,
      image: 'https://i.cbc.ca/1.6063988.1623538757!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/jessica-rosval.jpg',
      title: 'Anjela clarke',
      
    },
    {
      id: 6,
      image: 'https://st3.depositphotos.com/1177973/13978/i/450/depositphotos_139787952-stock-photo-indian-chef-holding-plate.jpg',
      title: 'Jimmy Walton',
     
    },
  ];

  const cardDeckStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center the cards
  };

  const cardStyle = {
    width: '25%', // Adjust the card width as needed (e.g., '30%')
    margin: '50px', // Adjust the margin as needed
  };

  const imageStyle = {
    width: '100%', // Adjust the width as needed (e.g., '90%')
    height: '280px',
    objectFit: 'cover', // Ensures the image covers the container without stretching or compressing
    cursor: 'pointer',
  };

  const cardTextStyle = {
    textAlign: 'center', // Center align text
  };


  return (
    <div style={cardDeckStyle}>
      {cardData.map((card) => (
        <div key={card.id} style={cardStyle}>
          <div className="card">
            <a href="/new-page">
              <img
                className="card-img-top"
                src={card.image}
                alt="Card image cap"
                style={imageStyle}
              />
            </a>
            <div className="card-body" style={cardTextStyle}>
              <h5 className="card-title">{card.title}</h5>
              
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChefCards;
