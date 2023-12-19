import React from 'react';
import Footer from './Footer';
import OurTeam from './OurTeam';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px',
};

const paragraphStyle = {
  marginLeft: '20px',
  marginRight: '100px',
  fontSize:"20px",
};

const footerContainerStyle = {
  width: '100%',
};

function AboutUs() {
  return (
    <div style={containerStyle}>
      <img
        src="https://www.recipehub.in/wp-content/uploads/2021/05/cropped-final.png"
        alt="img"
      />
      <h1 style={{ marginTop: '30px',color:'red',fontSize:'30px', }}>About Us</h1>
      <p style={{ fontSize:'20px',}}>Welcome to our About Us page. We are here to provide you with information about our company.</p>
      <div style={contentStyle}>
        <img
          src='https://raisingchildren.net.au/__data/assets/image/0035/48788/healthy-food-school-age-childrennarrow.jpg'
          alt=''
          style={{ width: '500px', height: '300px', marginLeft: '170px' }}
        />
        <p style={paragraphStyle}>
          Our Misson is the art of preparing delicious and nutritious meals with our collection of healthy recipes. At RecipeHub, we're passionate about promoting wellness through wholesome cooking. Whether you're looking for low-calorie options, plant-based dishes, or balanced meals that are both tasty and good for your body. Join us in embracing the joys of healthy cooking and sharing the love for nutritious food with our community of food enthusiasts.
        </p>
      </div>
      <h1 style={{color:"red"}}>What We Offer</h1>
      <p style={{fontSize:'20px'}}>RecipeHub provides you with a range of exciting features:</p>
      <ul >
        <li style={{textAlign:'left',fontSize:'20px'}}>Discover a wide array of recipes from various culinary traditions.</li>
        <li style={{textAlign:'left',fontSize:'20px'}}>Share your own culinary creations and insights with the RecipeHub community.</li>
        <li style={{textAlign:'left',fontSize:'20px'}}>Connect with fellow food lovers, exchange cooking tips, and build culinary friendships.</li>
        <li style={{textAlign:'left',fontSize:'20px'}}>Find endless inspiration for your next gastronomic adventure.</li>
      </ul>
      <h1 style={{color:'red'}}>Our Team</h1>
      <p style={{fontSize:'20px',}}>Meet the passionate individuals behind RecipeHub:</p>
      <OurTeam />
      
      <div style={footerContainerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
