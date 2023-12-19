import React, { useState } from 'react';
import HeaderAdmin from "./HeaderAdmin";
import SidebarMenu from "./SidebarMenu";
import AddRecipe from "./AddRecipe"; 
import DeleteRecipe from "./DeleteRecipe";
import UpdateRecipe from "./UpdateRecipe";
import ViewRecipe from "./ViewRecipe";

function Admin() {
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
    <div className="container-fluid">
    <div className="row" style={{ height: "80vh" }}>
      <div className="col-md-3" style={{border: "1px solid lightgray", minHeight: "100vh", overflowY: "auto" }}>
        <SidebarMenu onComponentSelect={setSelectedComponent} />
      </div>
      <div className="col-md-9" style={{ minHeight: "100vh", overflowY: "auto" }}>
       
         
          <div className="row" style={{ borderBottom: "1px solid lightgray", maxHeight: "50vh" }}>
            <HeaderAdmin />
          </div>
          
          <div className="row" style={{ maxheight: "100vh"}}>
            {renderSelectedComponent()}
          </div>
        </div>
      </div>
    </div>
  
  
  );
}

export default Admin;

