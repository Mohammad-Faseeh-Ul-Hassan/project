import React, { useState, useEffect, useRef } from 'react';
import { addRecipe } from '../Services/api';

const formContainerStyle = {
  marginTop:'40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formStyle = {
  width: '400px',
  padding: '20px',
  border: '2px solid gray',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 123, 255, 0.2)',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontFamily: 'monospace',
};

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    recipeId: '',
    recipeName: '',
    ingredients: '',
    instructions: '',
    image: null,
  });

  const [isSuccessAlert, setSuccessAlert] = useState(false);
  const [isErrorAlert, setErrorAlert] = useState(false);

  const recipeIdRef = useRef(null);
  const recipeNameRef = useRef(null);
  const ingredientsRef = useRef(null);
  const instructionsRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedRecipe = { ...recipe };
    updatedRecipe[name] = value;
    setRecipe(updatedRecipe);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { name, value } = e.target;
      const updatedRecipe = { ...recipe };
      updatedRecipe[name] += value !== '' ? `\n* ` : '';
      setRecipe(updatedRecipe);
    }
  };

  const handleNumberedEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { name, value } = e.target;
      const updatedRecipe = { ...recipe };
      updatedRecipe[name] += value !== '' ? `\n${updatedRecipe[name].split('\n').length + 1}. ` : '';
      setRecipe(updatedRecipe);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRecipe(recipe);

    // Rest of the code remains unchanged...
  };

  useEffect(() => {
    
  }, [isSuccessAlert]);

  useEffect(() => {
  }, [isErrorAlert]);

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Add Recipe</h2>
        <div>
          <label>Recipe ID:</label>
          <input
            type="text"
            name="recipeId"
            value={recipe.recipeId}
            onChange={handleChange}
            style={inputStyle}
            ref={recipeIdRef}
          />
        </div>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            name="recipeName"
            value={recipe.recipeName}
            onChange={handleChange}
            style={inputStyle}
            ref={recipeNameRef}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            onKeyDown={handleEnterKey}
            style={inputStyle}
            ref={ingredientsRef}
            placeholder="Enter ingredients, press Enter for a new bullet"
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            onKeyDown={handleNumberedEnterKey}
            style={inputStyle}
            ref={instructionsRef}
            placeholder="Enter instructions, press Enter for a new number"
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          style={{
            background: '#007BFF',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
