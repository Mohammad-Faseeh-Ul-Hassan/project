import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images3.alphacoders.com/874/thumb-1920-874898.jpg',
      alt: 'First slide',
      heading: 'Delicious Desserts',
      description: 'Enjoy these classic French macarons a variety of flavors.',
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/778/966/360/olives-lettuce-greek-cooking-wallpaper-preview.jpg',
      alt: 'Second slide',
      heading: 'Recipes Galore',
      description: 'Explore a culinary delights with our diverse recipes.',
    },
    {
      image: 'https://png.pngtree.com/background/20230519/original/pngtree-man-with-chef-coat-working-in-kitchen-of-a-restaurant-close-picture-image_2662771.jpg',
      alt: 'Third slide',
      heading: 'Cook Like a Pro',
      description: 'Learn from the expert chefs and elevate kitchen skills.',
    }
  ];

  useEffect(() => {
    
    const autoAdvance = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(autoAdvance);
  }, [currentSlide]);

  const carouselStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '2px',
    marginBottom: '40px', // Add a top margin
  };

  const slideStyle = {
    borderRadius: '10px',
  };

  const imageStyle = {
    objectFit: 'cover',
    height: '500px', // Increase the height here
  };

  const indicatorsStyle = {
    bottom: '10px',
  };

  // Define styles for the heading and description text
  const headingStyle = {
    color: 'red',
    fontFamily: 'cursive',
    fontSize: '50px',// Change the color to your desired color
  };

  const descriptionStyle = {
    color: 'yellow', 
    fontFamily: 'cursive',
    fontSize: '30px',// Change the color to your desired color
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={carouselStyle}>
      <ol className="carousel-indicators" style={indicatorsStyle}>
        {slides.map((slide, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === currentSlide ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner" style={slideStyle}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={slide.image} alt={slide.alt} style={imageStyle} />
            <div className="carousel-caption">
              <h2 style={headingStyle}>{slide.heading}</h2>
              <p style={descriptionStyle}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
