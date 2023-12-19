import React, { useState } from 'react';
import { deleteRecipe } from '../Services/api';

const DeleteRecipe = () => {
  const [recipeId, setRecipeId] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setRecipeId(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (recipeId.trim() === '') {
            setError('Recipe ID cannot be empty');
            return;
        }

        const response = await deleteRecipe(recipeId); // Modified here
        if (response.data.success) {
            alert('Recipe deleted successfully');
            setRecipeId('');
        } else {
            setError('Recipe not found or already deleted.');
        }
    } catch (error) {
        console.error('Error deleting recipe:', error);
        setError('Failed to delete recipe. Please try again.');
    }
};


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '400px',
          padding: '20px',
          border: '2px solid gray',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 123, 255, 0.2)',
        }}
      >
        <h2>Delete Recipe</h2>
        <div>
          <label>Recipe ID:</label>
          <input
            type="text"
            name="recipeId"
            value={recipeId}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <div style={{ color: 'red' }}>{error}</div>
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
          Delete Recipe
        </button>
      </form>
    </div>
  );
};

export default DeleteRecipe;
