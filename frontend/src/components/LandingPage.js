import React from 'react';
import Carousel from './Carousel';
import AfterCarousel from './AfterCarousel';
import RecipeCards from './RecipeCards';
import ChefCards from './ChefCards';
import Cussines from './Cussines';
import AfterCussines from './AfterCussines';
import Footer from './Footer';

// Define the background image URL with your high-resolution image
const backgroundImageUrl = 'https://media.istockphoto.com/id/1167863983/vector/horizontal-vector-illustration-of-an-empty-light-blue-grungy-textured-background.jpg?s=612x612&w=0&k=20&c=AgBWyrJP5O0GlKOGwzO5IXl6NrspMIR7q1Z7kYq8YsI=';

const landingPageStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

const navBarStyle = {
  backgroundColor: 'light gray',
};

function LandingPage() {
  return (
    <div>
      <div style={navBarStyle}>
        {/* Include your navigation bar content here */}
      </div>
      <div style={landingPageStyle}>
        <Carousel />
        <AfterCarousel />
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px', marginBottom: '40px', fontFamily: 'cursive', color: 'red' }}>Top Recipes</h1>
        <RecipeCards />
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px', marginBottom: '40px', fontFamily: 'cursive', color: 'red' }}>Our Top Chefs</h1>
        <ChefCards />
        <h1 style= {{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px', marginBottom: '40px', fontFamily: 'cursive', color: 'red' }}>Cuisines</h1>
        <Cussines />
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px', marginBottom: '40px', fontFamily: 'cursive', color: 'red' }}>Be Professional</h1>
        <AfterCussines />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
