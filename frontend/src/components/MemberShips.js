import React from 'react';
import Footer from './Footer';

function MemberShips() {
  const cardData = [
    {
        id: 1,
       
        title: 'Level 1',
        subtitle:'Free',
        description:'Enjoy the taste of our culinary community with our Free Membership. Get access to a variety of recipes, engage in discussions, and explore the vibrant world of flavors without any cost.',
        
      },
      {
        id: 2,
        title: 'Monthly Access',
        subtitle:'12$',
        description:'Elevate your cooking experience with our Monthly Access Membership. For a small monthly fee immerse yourself in a world of delicious possibilities, month after month.',
      },
      {
        id: 3,
        title: 'LifeTime Access',
        subtitle:'19$',
        description:'Indulge in the ultimate culinary experience with our Lifetime Access Membership.Pay once and enjoy unlimited access to all recipes, early access to new features, and exclusive events.',
      },
  ];

  const cardDeckStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: '18rem',
    margin: '50px',
  };

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const buttonStyle = {
    background: 'blue',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cardTextStyle = {
    textAlign: 'center',
  };

  return (
    <div>
    <h1 style={{textAlign:'center',fontWeight:'bold',color:'red',marginTop:'20px'}}>Membership</h1>
    <div style={cardDeckStyle}>
        
      {cardData.map((card) => (
        <div key={card.id} style={cardStyle}>
          <div class="card" style={{ width: '18rem' }}>
            
            <div class="card-body" style={cardTextStyle}>
              <h5 class="card-title">{card.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
              <p class="card-text">{card.description}</p>
              <button style={buttonStyle}>Subscribe</button>
            </div>
            
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    <Footer />
    </div>
    
  );
}

export default MemberShips;

