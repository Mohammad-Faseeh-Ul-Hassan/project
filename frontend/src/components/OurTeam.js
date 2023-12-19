import React from 'react';
import Footer from './Footer';

function OurTeam() {
  const cardData = [
    {
      id: 1,
      image: 'ceo.jpg',
      title: 'Mohammad Faseeh',
      text:'ceo',
      
    },
    {
      id: 2,
      image: 'https://chefin.com/wp-content/uploads/2021/02/chef-hemant-dadlani-profile-1-833x1024.jpg',
      title: 'Ali Ejaz',
      text:'Head Chef',
    },
  ];

  const cardDeckStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  const cardStyle = {
    width: '40%',
    margin: '50px',
  };

  const imageStyle = {
    width: '100%', 
    height: '340px',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const cardTextStyle = {
    textAlign: 'center', 
  };

  const cardfooter = {
fontWeight:'bold',
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
              <span className="card-text">{card.text}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurTeam;
