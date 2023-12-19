import { getRecipe } from "../Services/api";
import { useState, useEffect } from 'react';

const ViewRecipe = () => {
  const tableStyle = {
    margin: '0 auto', // Center the table horizontally
    maxWidth: '800px', // Set maximum width of the table
    borderCollapse: 'collapse',
    width: '170%', // Adjusted width
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adding shadow effect
    marginLeft: '-120px',
  };

  const thTdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '15px',
  };

  const thStyle = {
    backgroundColor: '#f5f5f5', // Gray background for header cells
  };

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    getRecipesDetails();
  }, []);

  const getRecipesDetails = async () => {
    try {
      const result = await getRecipe();
      setRecipeData(result.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div className="col-md-8 mx-auto mt-5"> {/* Adjusted column width */}
      <table className="table" style={tableStyle}>
        <thead>
          <tr>
            <th scope="col" style={thStyle}>Recipe ID</th>
            <th scope="col" style={thStyle}>Recipe Name</th>
            <th scope="col" style={thStyle}>Ingredients</th>
            <th scope="col" style={thStyle}>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {recipeData.map((details) => (
            <tr key={details.recipeId}>
              <td style={thTdStyle}>{details.recipeId}</td>
              <td style={thTdStyle}>{details.recipeName}</td>
              <td style={thTdStyle}>
              <ul>
                  {Array.isArray(details.ingredients) ? (
                    details.ingredients.map((ingredients, index) => (
                      <li key={index}>{ingredients}</li>
                    ))
                  ) : (
                    <li>{details.ingredients}</li>
                  )}
                </ul>
              </td>
              <td style={thTdStyle}>
                <ul>
                  {Array.isArray(details.instructions) ? (
                    details.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))
                  ) : (
                    <li>{details.instructions}</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRecipe;
