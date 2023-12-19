

function SidebarMenu({ onComponentSelect }) {
  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    border: 'none',
    color: 'Black',
    textAlign: 'left',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
    marginBottom: '10px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  };

  const buttonContainerStyle = {
    width: '100%',
    border:"none",
  };

  const handleButtonClick = (componentName) => {
    onComponentSelect(componentName);
  };

  return (
    <div className="card mt-5" style={{ width: '18rem' }}>
      <div className="list-group list-group-flush">
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('add')}
        >
          Add Recipes
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('delete')}
        >
          Delete Recipes
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('update')}
        >
          Update Recipes
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleButtonClick('view')}
        >
          View Recipes
        </button>
      </div>
    </div>
  );
}

export default SidebarMenu;
