import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, addToCart] = useState(false)
  const item = inCart ? "in-cart" : ""
  
  function handleClick(){
    addToCart((inCart)=> !inCart)
  }

  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? 'Add to Cart' : 'Remove from Cart'}</button>
    </li>
  );
}

export default Item;
