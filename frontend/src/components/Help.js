import React, { useState } from 'react';
import Footer from './Footer';

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  marginTop:'20px',
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  marginTop:'20px',
};

const questionStyle = {
  fontWeight: 'bold',
  marginTop:'20px',
};

const formStyle = {
  marginTop: '20px',
  border: '1px solid blue',
  borderRadius: '8px',
  padding: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '8px',
  boxSizing: 'border-box',
};

const selectStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '8px',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '8px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px',
  cursor: 'pointer',
  marginTop: '10px',
  border: 'none',
  borderRadius: '4px',
};
const footerStyle = {
    width: '100%',  // Set the width to 100% to fill from left to right
    marginTop: '20px',
    textAlign:'left',
  };

function Help() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [query, setQuery] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the query (you can add your logic here)
    console.log('User Query Details:', { name, email, category, query });
    // Reset the form after submission
    setName('');
    setEmail('');
    setCategory('General Inquiry');
    setQuery('');
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={{textAlign:'center',fontWeight:'bold',color:'red'}}>RecipeHub Help Center</h1>

        <section>
          <h2 style={headingStyle}>Frequently Asked Questions</h2>
          <div>
            <p style={questionStyle}>Q: How do I Add a recipe?</p>
            <p>
              A: To share your culinary masterpiece, navigate to your profile and click on the "Add Recipe" button. Fill in the required details and submit.
            </p>
          </div>

          <div>
            <p style={questionStyle}>Q: How can I Update or Delete my recipes?</p>
            <p>
              A: Manage your recipes with ease by visiting your profile page. Simply click on the "UpdateRecipe" or "DeleteRecipe" option next to the desired recipe.
            </p>
          </div>
        </section>

        <section style={formStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p>
            If you have any specific queries, concerns, or suggestions, please don't hesitate to reach out to us using the form below. We are here to assist you!
          </p>

          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>
              Your Name:
              <input
                style={inputStyle}
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
              />
            </label>

            <label style={labelStyle}>
              Your Email:
              <input
                style={inputStyle}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </label>

            <label style={labelStyle}>
              Category:
              <select
                style={selectStyle}
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Recipe Assistance">Recipe Assistance</option>
                <option value="Account Issues">Account Issues</option>
                <option value="Feedback">Feedback</option>
              </select>
            </label>

            <label style={labelStyle}>
              Your Query:
              <textarea
                style={textareaStyle}
                value={query}
                onChange={handleQueryChange}
                placeholder="Type your query here..."
                required
              />
            </label>

            <button style={buttonStyle} type="submit">Submit</button>
          </form>
        </section>
      </div>
      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default Help;
