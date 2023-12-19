import React from 'react';
import { Link } from 'react-router-dom';
import TermOfServices from './TermOfServices';

function Footer() {
  const whiteText = { color: 'white' }; // Define a style object for white text

  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Section: Links */}
      <section className="" style={{ backgroundColor: 'black' }}>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4" style={whiteText}>
                <i className="fas fa-gem me-3 text-secondary"></i>RecipeHub
              </h6>
              <p style={whiteText}>
                "Your go-to recipe sharing platform. Discover, create, and share your favorite culinary creations. Join us in the delicious journey of cooking and sharing today!"
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4" style={whiteText}>
                Useful links
              </h6>
              <p style={whiteText}>
                <Link to="/OurAlumini" className="text-reset">Our Alumini</Link>
              </p>
              <p style={whiteText}>
                <Link to="/MemberShips" className="text-reset">MemberShip</Link>
              </p>
              <p style={whiteText}>
                <Link to="/TermOfServices" className="text-reset">TermOfServices</Link>
              </p>
              <p style={whiteText}>
                <Link to="/Help" className="text-reset">Help</Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4" style={whiteText}>Contact</h6>
              <p style={whiteText}><i className="fas fa-home me-3 text-secondary"></i> WahCantt, Pakistan</p>
              <p style={whiteText}>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                RecipeHub@gmail.com
              </p>
              <p style={whiteText}><i className="fas fa-phone me-3 text-secondary"></i> + 92 123 456 788</p>
              <p style={whiteText}><i className="fas fa-print me-3 text-secondary"></i> + 92 123 456 789</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'black',color:"white" }}>
        ©Copyright:
        <Link to="http://localhost:3000/Home" className="text-reset fw-bold" style={whiteText}>
          RecipeHub.com
        </Link>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
