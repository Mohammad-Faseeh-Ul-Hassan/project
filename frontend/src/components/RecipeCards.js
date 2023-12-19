import React, { useEffect, useState } from 'react';
import { item } from '../App';
import { useContext } from 'react';
function RecipeCards() {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      let result = await fetch('https://myproject-h7lj.onrender.com/admin');
      result = await result.json();
      setdata(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  const cardDeckStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: '25%',
    margin: '50px',
  };

  const imageStyle = {
    width: '100%', // Adjust the width as needed (e.g., '90%')
    height: '280px',
    objectFit: 'cover', // Ensures the image covers the container without stretching or compressing
    cursor: 'pointer',
  };

  const buttonStyle = {
    background: 'blue',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cardTextStyle = {
    textAlign: 'center', 
  };
  const {v,sv}=useContext(item)
  const addtocart=()=>{
    sv(v+1)
  }
 

  return (
    <div style={cardDeckStyle}>
      {data.map((product) => (
        <div key={product.id} style={cardStyle}>
          <div className="card">
            <a href="/new-page">
              <img
                className="card-img-top"
                src={product.image}
                alt="Card image cap"
                style={imageStyle}
              />
            </a>
            <div className="card-body" style={cardTextStyle}>
              <h5 className="card-title">{product.recipeId}</h5>
              <h5 className="card-title">{product.recipeName}</h5>
              {/* <h5 className="card-title">{product.ingredients}</h5>
              <h5 className="card-title">{product.instructions}</h5> */}
            
              <button style={buttonStyle} onClick={addtocart}>
                Add to Favorite
              </button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default RecipeCards;
