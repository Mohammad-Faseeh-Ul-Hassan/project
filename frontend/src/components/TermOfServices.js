import React from 'react';
import Footer from './Footer';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  color: '#333',
  fontWeight: 'bold',
  textAlign:'center',
};

const linkStyle = {
  color: 'blue',
  textDecoration: 'none',
};


const footerStyle = {
  width: '100%',  // Set the width to 100% to fill from left to right
  marginTop: '20px',
};

function TermOfServices() {
  return (
    <div>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Terms of Service</h1>

        <p>
          Welcome to RecipeHub! These terms of service outline the rules and regulations for the use of our platform.
        </p>

        <h2 style={headingStyle}> Acceptance of Terms</h2>
        <p>
          By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you may not use our platform.
        </p>

        <h2 style={headingStyle}>User Responsibilities</h2>
        <p>
          Users are responsible for the content they post on the platform. Ensure that your recipes and contributions adhere to our community guidelines. We reserve the right to remove any content that violates these guidelines.
        </p>

        <h2 style={headingStyle}>Privacy</h2>
        <p>
          Protecting your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your personal information.
        </p>

        <h2 style={headingStyle}>Intellectual Property</h2>
        <p>
          Users retain ownership of their recipes, but by submitting content to the platform, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content.
        </p>

        <h2 style={headingStyle}>Prohibited Activities</h2>
        <p>
          Users must not engage in any activities that violate the law or our community standards. This includes but is not limited to spamming, hacking, or distributing harmful content.
        </p>

        <h2 style={headingStyle}>Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account and access to the platform if you violate these terms or for any other reason without notice.
        </p>

        <h2 style={headingStyle}>Changes to Terms</h2>
        <p>
          We may update these terms from time to time. It is your responsibility to review the terms periodically. Continued use of the platform after the changes constitute acceptance of the modified terms.
        </p>

        <h2 style={headingStyle}>Contact Information</h2>
        <p>
          If you have any questions about these terms, please contact us at <a href="mailto:recipeHub@gmail.com" style={linkStyle}>recipeHub@gmail.com</a>
        </p>

        <p>
          Thank you for being a part of RecipeHub!
        </p>
      </div>

      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default TermOfServices;

