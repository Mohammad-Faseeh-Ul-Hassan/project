import React from 'react';

function Cussines() {
  const cardData = [
    {
      id: 1,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/46/bb/51/house-of-curry.jpg',
      title: 'Bengali',
    },
    {
      id: 2,
      image: 'https://cdn.shopify.com/s/files/1/0565/1901/files/Screen_Shot_2022-06-21_at_11.59.14_pm.png?v=1655848856',
      title: 'Italain',
      
    },
    {
      id: 3,
      image: 'https://lareeadda.com/wp-content/uploads/2022/10/LA_Subcontinental-Treasure_blog_V2.jpg',
      title: 'Pakistani',
      
    },
    {
      id: 4,
      image: 'https://news.cgtn.com/news/7941544d77677a6333566d54/img/d72156db-73f6-457b-9962-48a2823800e2.jpg',
      title: 'Indian',
      
    },
    {
      id: 5,
      image: 'https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook',
      title: 'Chinese',
     
    },
    {
      id: 6,
      image: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg',
      title: 'French',
     
    },
  ];

  const cardDeckStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
  };

  const cardStyle = {
    width: '25%', 
    margin: '50px', 
  };

  const imageStyle = {
    width: '100%', 
    height: '280px', 
    objectFit: 'cover',
    cursor: 'pointer',
  };
  
  const cardTextStyle = {
    textAlign: 'center', 
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

export default Cussines;
