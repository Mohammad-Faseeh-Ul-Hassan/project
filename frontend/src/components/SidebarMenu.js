import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faAngleDown, faAngleUp, faPlus, faTrash, faCaretUp, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SidebarMenu({ onComponentSelect }) {
  const [showRecipes, setShowRecipes] = useState(false);
  const [showChef, setShowChef] = useState(false);
  const [showCussines, setShowCussines] = useState(false);

const toggleRecipes = () => {
  setShowRecipes(!showRecipes);
  setShowChef(false); 
};

const toggleChef = () => {
  setShowChef(!showChef);
  setShowRecipes(true); 
};

const toggleCussines = () => {
  setShowCussines(!showCussines);
  setShowCussines(true); 
};

  const buttonStyle = {
    width: '108%',
    padding: '10px',
    border: 'none',
    color: 'black',
    textAlign: 'left',
    fontSize: '16px',
    marginTop: '10px',
    background: 'transparent',
    ":hover": {
      backgroundColor: 'lightgray',
      cursor: 'pointer',
    },
  };

  const handleRecipeClick = (componentName) => {
    onComponentSelect(componentName);
  };

  const handleChefClick = (componentName) => {
    onComponentSelect(componentName);
  };

  const handleCussinesClick = (componentName) => {
    onComponentSelect(componentName);
  };

  return (
    <div>
      <div style={{ marginTop: '10px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faUserTie} size="3x" style={{ color: 'black' }} />
        <div style={{ marginLeft: '10px',marginTop:'15px' }}>
          <h3>RecipeHub</h3>
          <p style={{ fontSize: '18px', color: 'gray', marginTop: '-5px' }}>Admin Panel</p>
        </div>
      </div>

      <div style={{ width: '18rem', marginTop: '20px' }}>
        <div>
          <button style={{ ...buttonStyle, ...(showRecipes && { backgroundColor: 'lightgray' }) }} onClick={toggleRecipes}>
            Recipes
            <FontAwesomeIcon icon={showRecipes ? faAngleUp : faAngleDown} size="lg" style={{ marginLeft: '10px' }} />
          </button>
          {showRecipes && (
            <div>
              <button style={buttonStyle} onClick={() => handleRecipeClick('add')}>
                <FontAwesomeIcon icon={faPlus} size="lg" style={{ marginRight: '10px' }} /> Add Recipes
              </button>
              <button style={buttonStyle} onClick={() => handleRecipeClick('delete')}>
                <FontAwesomeIcon icon={faTrash} size="lg" style={{ marginRight: '10px' }} />
                Delete Recipes
              </button>
              <button style={buttonStyle} onClick={() => handleRecipeClick('update')}>
                <FontAwesomeIcon icon={faCaretUp} size="lg" style={{ marginRight: '10px' }} />
                Update Recipes
              </button>
              <button style={buttonStyle} onClick={() => handleRecipeClick('view')}>
                <FontAwesomeIcon icon={faEye} size="lg" style={{ marginRight: '10px' }} />
                View Recipes
              </button>
            </div>
          )}

          <button style={{ ...buttonStyle, ...(showChef && { backgroundColor: 'lightgray' }) }} onClick={toggleChef}>
            Chef
            <FontAwesomeIcon icon={showChef ? faAngleUp : faAngleDown} size="lg" style={{ marginLeft: '10px' }} />
          </button>
          {showChef && (
            <div>
              <button style={buttonStyle} onClick={() => handleChefClick('addChef')}>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} /> Add Top Chefs
              </button>
              <button style={buttonStyle} onClick={() => handleChefClick('DeleteChef')}>
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }} />
                Delete Top Chefs
              </button>
            </div>
          )}
           <button style={{ ...buttonStyle, ...(showCussines && { backgroundColor: 'lightgray' }) }} onClick={toggleCussines}>
            Cussines
            <FontAwesomeIcon icon={showCussines ? faAngleUp : faAngleDown} size="lg" style={{ marginLeft: '10px' }} />
          </button>
          {showCussines && (
            <div>
              <button style={buttonStyle} onClick={() => handleCussinesClick('addCussines')}>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} /> Add Cussines
              </button>
              <button style={buttonStyle} onClick={() => handleCussinesClick('DeleteCussines')}>
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }} />
                Delete Cussines
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;






































// function SidebarMenu({ onComponentSelect }) {
//   const buttonStyle = {
//     display: 'block',
//     width: '100%',
//     padding: '10px',
//     border: 'none',
//     color: 'Black',
//     textAlign: 'left',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background 0.3s',
//     marginBottom: '10px',
//     backgroundColor: 'lightblue',
//     borderRadius: '5px',
//   };

//   const buttonContainerStyle = {
//     width: '100%',
//     border:"none",
//   };

//   const handleButtonClick = (componentName) => {
//     onComponentSelect(componentName);
//   };

//   return (
//     <div className="card mt-5" style={{ width: '18rem' }}>
//       <div className="list-group list-group-flush">
//         <button
//           style={buttonStyle}
//           onClick={() => handleButtonClick('add')}
//         >
//           Add Recipes
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => handleButtonClick('delete')}
//         >
//           Delete Recipes
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => handleButtonClick('update')}
//         >
//           Update Recipes
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => handleButtonClick('view')}
//         >
//           View Recipes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SidebarMenu;
