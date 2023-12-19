import React, { useState } from 'react';
import SidebarMenu from "./SidebarMenu";
import AddRecipe from "./AddRecipe"; 
import DeleteRecipe from "./DeleteRecipe";
import UpdateRecipe from "./UpdateRecipe";
import ViewRecipe from "./ViewRecipe";
 

function Recipes() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'add':
        return <AddRecipe />;
      case 'delete':
        return <DeleteRecipe />;
      case 'update':
        return <UpdateRecipe />;
      case 'view':
        return <ViewRecipe />;
    
    }
  };

  return (
    
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-3" style={{ border: "3px solid red", height: "1100%" }}>
          <SidebarMenu onComponentSelect={setSelectedComponent} />
        </div>
        <div className="col-md-9" style={{ border: "1px solid black", height: "1100%" }}>
          {renderSelectedComponent()}
        </div>
        
      </div>
    
  );
}

export default Recipes;
