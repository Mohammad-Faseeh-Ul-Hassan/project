import React, { useState, useEffect } from 'react';
import { updateRecipe } from '../Services/api';

const UpdateRecipe = () => {
  const [recipe, setRecipe] = useState({
    recipeId: '',
    recipeName: '',
    ingredients: '',
    instructions: '',
    image: null, // Added field for image
  });

  const [isRecipeUpdated, setIsRecipeUpdated] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // Handle image file selection
      setRecipe({ ...recipe, image: e.target.files[0] });
    } else {
      const updatedRecipe = { ...recipe };
      updatedRecipe[e.target.name] = e.target.value;
      setRecipe(updatedRecipe);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRecipe(recipe);
    setIsRecipeUpdated(true);
  };

  useEffect(() => {
    if (isRecipeUpdated) {
      alert('Recipe updated successfully');
      setIsRecipeUpdated(false); // Reset the state for the next update
      // Optionally, you can reset the form fields after the update
      setRecipe({
        recipeId: '',
        recipeName: '',
        ingredients: '',
        instructions: '',
        image: null, // Reset the image field
      });
    }
  }, [isRecipeUpdated]);

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
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Update Recipe</h2>
        <div>
          <label>Recipe ID:</label>
          <input
            type="text"
            name="recipeId"
            value={recipe.recipeId}
            onChange={handleChange}
            style={inputStyle}
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
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
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
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
